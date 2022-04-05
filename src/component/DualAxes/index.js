import { DualAxes } from '@ant-design/plots';

function DualAxesComponent(props) {
  console.log('===============', props);
  const config = {
    data: [props.data, props.data],
    xField: 'year',
    yField: ['value', 'count'],
    meta: {
      year: {
        alias: '时间',
      },
      value: {
        alias: 'CPU',
      },
      count: {
        alias: '内存'
      },
    },
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
  };
  return (
    <>
      <DualAxes {...config} />;
    </>
  )
}

export default DualAxesComponent;