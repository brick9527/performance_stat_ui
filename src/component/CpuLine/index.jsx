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

  return (
    <div>
      <h1>CPU使用</h1>
      <Line
        data={cpu}
        xField={"timestamp"}
        yField={"usedPercent"}
        seriesField={"coreIndex"}
      ></Line>
    </div>
  );
}

export default CpuLine;
