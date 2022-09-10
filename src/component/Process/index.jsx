import _ from 'lodash';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getProcessData } from '../../api';

function Process(props) {
  const [tableData, setTaleData] = useState([]);

  useEffect(() => {
    if (!props.batchId) {
      return;
    }

    getProcessData({ batchId: props.batchId }).then(res => {
      console.log(res);
      const list = _.get(res, 'data.list', []);
      setTaleData(list);
    });
  }, [props.batchId]);

  const sorter = (key) => {
    return (firstItem, secondItem) => {
      return _.get(firstItem, key) - _.get(secondItem, key);
    };
  };

  const columns = [
    {
      title: 'ppid',
      dataIndex: 'ppid',
      key: 'ppid',
      sorter: sorter('ppid'),
    },
    {
      title: 'pid',
      dataIndex: 'pid',
      key: 'pid',
      sorter: sorter('pid'),
    },
    {
      title: 'uid',
      dataIndex: 'uid',
      key: 'uid',
      sorter: sorter('uid'),
    },
    {
      title: 'cpu',
      dataIndex: 'cpu',
      key: 'cpu',
      render: (text) => {
        return `${text}%`
      },
      sorter: sorter('cpu'),
    },
    {
      title: '内存',
      dataIndex: 'memory',
      key: 'memory',
      render: (text) => {
        return `${text}%`
      },
      sorter: sorter('memory'),
    },
    {
      title: '进程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '命令',
      dataIndex: 'cmd',
      key: 'cmd',
      ellipsis: true,
    },
  ];

  return (
    <div>
      <h1>进程信息</h1>
      <Table columns={columns} dataSource={tableData}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Process);
