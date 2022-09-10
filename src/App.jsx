import { useState } from 'react';
import { DatePicker, Layout, Menu, Row, Col } from 'antd';
import dayjs from 'dayjs';

import CpuLine from './component/CpuLine';
import MemLine from './component/MemLine';
import Test from './component/Test';
import Process from './component/Process';

import './App.less';

const { Header, Content } = Layout;

function App() {
  const [date, setDate] = useState(null);

  return (
    <div className='App'>
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          />
        </Header>

        <Content className="layout-content">
          <Row>
            <Col lg={18} sm={16} style={{ padding: '20px' }} className="site-left-content">
              <Test />
              <h1>日期选择</h1>
              <DatePicker onChange={(currentDate) => { setDate(currentDate ? currentDate.format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD')) }} />

              <CpuLine date={date}/>
              
              <MemLine date={date}/>
            </Col>

            <Col lg={6} sm={8} style={{ padding: '20px' }}>
              <Process />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;