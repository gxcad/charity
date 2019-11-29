import React, { useState } from 'react';
import PieChart from 'react-minimal-pie-chart';
function sortForPie(arr, sortBy, accType = undefined) {
  console.log("hjlkhkjvhajkhkjesfhkjcha")
  console.log(arr)
  console.log(sortBy)
  console.log(accType)
  const colorArr = ['#b5e37e', '#7db9ec', '#b784f2', '#f28ec4', '#eeaf7a', '#f66555', '#ffc66f', '#f8f9d4', '#3cccd0', '#008cd0']
  const obj = {};
  const output = [];
  let incColor = 0;
  arr.forEach(inArr => {
    if (accType) {
      if (obj[inArr[sortBy]]) {
        obj[inArr[sortBy]] += Number(inArr[accType]);
      } else {
        obj[inArr[sortBy]] = Number(inArr[accType]);
      }
    } else {
      if (obj[inArr[sortBy]]) {
        obj[inArr[sortBy]] += 1;
      } else {
        obj[inArr[sortBy]] = 1;
      }
    }
  })
  for (let key in obj) {
    output.push({ title: key, value: obj[key], color: colorArr[incColor] })
    incColor++;
    if (incColor > colorArr.length - 1) incColor = 0;
  }
  console.log("this is the out", output)
  return output;
}
const KeyElement = ({ color, text }) => {
  console.log(color)
  return (
    <div>
      <button style={{ "color": color }}>{text}</button>
    </div>
  )
}
const DataVis = ({ isCharity }) => {
  const sum = isCharity ? isCharity.reduce((acc, val) => acc + Number(val.amount), 0) : 0;
  const pieData = sortForPie(isCharity, "charityName", "amount");
  const pie = <PieChart className='pieChart'
    data={
      pieData
    }
  />;
  const keyArr = [];
  pieData.forEach((obj, i) => {
    keyArr.push(<KeyElement key={i} color={obj.color} text={obj.title} />)
  })
  return (
    <div>
      <h1>Data Visual</h1>
      <p>Total: ${sum}</p>
      {pie}
      {keyArr}
    </div>
  )
}
export default DataVis;