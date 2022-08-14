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

  return (
    <div>
      <h1>内存使用</h1>
      <Line
        data={mem}
        xField={"timestamp"}
        yField={"usedPercent"}
        seriesField={null}
      ></Line>
    </div>
  );
}

export default MemLine;
