import _ from 'lodash';

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
      console.log(_.get(tooltipData, '[0].data'));
      const { batchId } = pointData;
      if (!batchId) {
        return;
      }

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
        onReady={onReady}
      ></Line>
    </div>
  );
}

export default CpuLine;
