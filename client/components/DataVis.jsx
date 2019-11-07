import React from 'react';
import PieChart from 'react-minimal-pie-chart';
const DataVis = ({ isCharity }) => {
  const sum = isCharity.reduce((acc, val) => acc + Number(val.amount), 0)
  const obj = {};
  const pie = <PieChart className='pieChart'
    data={[
      { title: 'One', value: 10, color: '#E38627' },
      { title: 'Two', value: 15, color: '#C13C37' },
      { title: 'Three', value: 20, color: '#6A2135' },
    ]}
  />;
  console.log(obj)
  // isCharity.forEach(obj => {
  //   total += Number(obj.donatedAmount);
  // })
  return (
    <div>
      <h1>Data Visual</h1>
      <p>Total: {sum}</p>
      {pie}
    </div>
  )
}
export default DataVis;