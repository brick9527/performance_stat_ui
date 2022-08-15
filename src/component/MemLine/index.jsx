import Line from "../Line";
import { getMemData } from '../../api';
import { useEffect, useState } from "react";

function MemLine (props) {
  const [mem, setMem] = useState([]);
  const { date } = props;

  useEffect(() => {
    getMemData({ date: props.date || new Date() }).then((res) => {
      setMem(res.data.list);
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
      <h1>内存使用</h1>
      <Line
        data={mem}
        xField={"timestamp"}
        yField={"usedPercent"}
        seriesField={null}
        onReady={onReady}
      ></Line>
    </div>
  );
}

export default MemLine;
