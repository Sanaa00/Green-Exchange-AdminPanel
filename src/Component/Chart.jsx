import { PieChart } from 'react-minimal-pie-chart';

function Chart() {
  return (
    <PieChart
      data={[
        { title: 'Erbil', value: 10, color: '#E38627' },
        { title: 'Suly', value: 15, color: '#C13C37' },
        { title: 'duhok', value: 20, color: '#6A2135' },
      ]}
    />
  );
}

export default Chart;
