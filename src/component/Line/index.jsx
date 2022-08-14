import { Line } from '@ant-design/charts';


const CpuLine = (props) => {
  const options = {
    data: props.data,
    xField: props.xField,
    yField: props.yField,
    seriesField: props.seriesField,
    legend: {
      position: 'top',
    },
    yAxis: {
      max: 100,
      min: 0,
      minLimit: 0,
      maxLimit: 100,
    }
  };

  return <Line {...options} />;
};

export default CpuLine;