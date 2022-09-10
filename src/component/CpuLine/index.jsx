import _ from 'lodash';
import { connect } from 'react-redux';

import Line from "../Line";
import { getCpuData } from '../../api';
import { useEffect, useState } from "react";


function CpuLine (props) {
  const [cpu, setCpu] = useState([]);
  const { date } = props;

  useEffect(() => {
    getCpuData({ date: date || new Date() }).then((res) => {
      setCpu(res.data.list);
    });
  }, [date]);

  function onReady(plot) {
    plot.on('plot:click', (event) => {
      const { x, y } = event;
      const tooltipData = plot.chart.getTooltipItems({ x, y });
      const pointData = _.get(tooltipData, '[0].data', {});
      const { batchId } = pointData;
      if (!batchId) {
        return;
      }

      props.setBatchId(batchId);
      // TODO: 获取进程信息
    })
  }

  return (
    <div>
      <h1>CPU使用</h1>
      <Line
        data={cpu}
        xField={"timestamp"}
        yField={"usedPercent"}
        seriesField={"coreIndex"}
        tooltip={{
          formatter: (dataItem) => {
            return { name: `core ${dataItem.coreIndex}`, value: dataItem.usedPercent + '%' };
          },        
        }}
        onReady={onReady}
      ></Line>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  // 返回一个对象，该对象每个方法就是一个action，所有的这些action都将绑定到组件的props参数上
  return {
    setBatchId: (value) => {
      dispatch({ type: 'batchId/set', value });
    },
  };
};

export default connect(null, mapDispatchToProps)(CpuLine);
