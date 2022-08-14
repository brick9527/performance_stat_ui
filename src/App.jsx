import { useState } from "react";
import { DatePicker } from "antd";
import dayjs from 'dayjs';

import CpuLine from './component/CpuLine';
import MemLine from './component/MemLine';

function App() {
  const [date, setDate] = useState(null);

  return (
    <div className="App">
      <h1>日期选择</h1>
      <DatePicker
        autoFocus={true}
        onChange={(currentDate) => { setDate(currentDate ? currentDate.format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')) }} />

      <CpuLine date={date}/>
      
      <MemLine date={date}/>
    </div>
  );
}

export default App;