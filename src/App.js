import Line from "./component/Line";
import { useEffect, useState } from "react";
import { Input, Button, message } from "antd";
import { getCpuData, getMemData } from './api';

function App() {
  const [cpu, setCpu] = useState([]);
  const [mem, setMem] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    getCpuData().then((res) => {
      setCpu(res.data.list);
    });

    getMemData().then((res) => {
      setMem(res.data.list);
    });
  }, []);

  function changeInputVal(e) {
    setDate(e.target.value)
  }

  function refreshData() {
    const dateReg = /([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))/
    if (!dateReg.test(date)) {
      message.error('日期格式不正确');
      return false;
    }

    getCpuData({ date }).then((res) => {
      setCpu(res.data.list);
    });

    getMemData({ date }).then((res) => {
      setMem(res.data.list);
    });
  }

  return (
    <div className="App">
      <Input.Group compact>
        <Input
          style={{ width: "calc(100% - 200px)" }}
          placeholder="请输入日期"
          onChange={changeInputVal}
        />
        <Button type="primary" onClick={refreshData}>Submit</Button>
      </Input.Group>
      <h1>CPU使用</h1>
      <Line
        data={cpu}
        xField={"timestamp"}
        yField={"usedPercent"}
        seriesField={"coreIndex"}
      ></Line>

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

export default App;
