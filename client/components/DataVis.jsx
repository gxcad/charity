import React, { useState } from 'react';
import PieChart from 'react-minimal-pie-chart';

const dummyData = [[{
  name: 'Rancho Coastal Humane Society',
  mission:
    'Rancho Coastal Humane Society (RCHS) is dedicated to the rescue and shelter of abandoned companion animals, encouraging adoptions into loving homes, and promoting humane ideals through education and community outreach. <br>Founded in 1960 by a group of dedicated volunteers under the leadership of Maria K. Lloyd, the focus of RCHS is on strengthening the human-animal bond.<br>Programs & Services Include: <br>Dog, Cat and Rabbit Adoptions<br>Friends of County Animal Shelters: Intake of animals from over or nearing capacity shelters. <br>Foster Program: Volunteers open their homes to homeless animals.<br>Animal Safehouse Program: A safety net for the pets of people in transition due to crisis. <br>Humane Education: Spring/Fall Animal Camps for children, as well as Kids Community Service.<br>Volunteer Program: An opportunity to give back and get involved.',
  url: 'http://www.rchumanesociety.org/',
  tagLine: ' Together We Save Lives! ',
  score: 100,
  stars:
    'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
  categoryName: 'Animals',
  location: 'CA'
}],
[{
  name: 'Children\'s Discovery Museum of San Jose',
  mission:
    'The mission of Children\'s Discovery Museum of San Jose is to inspire creativity, curiosity, and lifelong learning. Its vision is that today\'s children become tomorrow\'s visionaries. Since opening in 1990, the Museum has welcomed over 9 million visitors.<br><br>As a center for children\'s learning and discovery, the Museum\'s iconic 52,000 sq. ft. facility houses hands-on, inquiry-based exhibits and programs in the arts, humanities, science, and technology. Deeply rooted in the Silicon Valley community, CDM is committed to active engagement of a diverse socioeconomic audience. Through the Open Door Policy and the national Museums for All program, about a third of its visitors receive free or subsidized admission. Demonstrating core competencies in early childhood development, the Museum has been honored with national, regional, and local awards for fabrication of interactive exhibits, community engagement, health promotion, and environmental education.<br>',
  url: 'http://www.cdm.org/',
  tagLine: 'Fun and Learning for Bay Area Children and Families',
  score: 98.88,
  stars:
    'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
  categoryName: 'Arts, Culture, Humanities',
  location: 'CA'
}],
[{
  name: 'Sankara Eye Foundation, USA',
  mission:
    'Founded in 1998, the mission of the Sankara Eye Foundation, USA (SEF, USA) is to realize the goal of eradicating curable blindness in India. We initiate and drive community eye care activities in India by working with eye care organizations such as Sankara Eye Foundation, India which runs Sankara Eye Hospitals across India.. SEF USA has increased the number of specialty eye care hospitals from 1 in 1998 to 9 by 2017. The number of free eye surgeries is performed at an annual rate of 160,000 as of 2017. The goal is to perform 500,000 free eye surgeries per year. SEF has performed over 1.66 million free eye surgeries as of Nov 30, 2017.',
  url: 'http://www.giftofvision.org',
  tagLine: 'Help us eradicate curable blindness',
  score: 100,
  stars:
    'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
  categoryName: 'Health',
  location: 'CA'
}],
[{
  name: 'Asha for Education',
  mission:
    'Mission: "To catalyze socio-economic change in India through education of underprivileged children."<br><br>Founded in 1991, Asha for Education is a secular organization dedicated to causing socio-economic change in India by focusing on access to basic education. Asha believes that education is a critical requisite for socio-economic change. As of 2015, there are over 50 Asha chapters worldwide including US, Canada, Europe and India. The organization has more than 1,000 active volunteers and several thousand supporters around the world. Till date, Asha has supported more than 400 different projects spanning more than 24 states in India. Since its inception and till 2014, Asha for Education has disbursed around $32 million dollars which benefited thousands of disadvantaged children and youth. ',
  url: 'http://www.ashanet.org',
  tagLine: 'Bringing hope through education',
  score: 98.59,
  stars:
    'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
  categoryName: 'International',
  location: 'CA'
}],
[{
  name: 'Asha for Education',
  mission:
    'Mission: "To catalyze socio-economic change in India through education of underprivileged children."<br><br>Founded in 1991, Asha for Education is a secular organization dedicated to causing socio-economic change in India by focusing on access to basic education. Asha believes that education is a critical requisite for socio-economic change. As of 2015, there are over 50 Asha chapters worldwide including US, Canada, Europe and India. The organization has more than 1,000 active volunteers and several thousand supporters around the world. Till date, Asha has supported more than 400 different projects spanning more than 24 states in India. Since its inception and till 2014, Asha for Education has disbursed around $32 million dollars which benefited thousands of disadvantaged children and youth. ',
  url: 'http://www.ashanet.org',
  tagLine: 'Bringing hope through education',
  score: 98.59,
  stars:
    'https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png',
  categoryName: 'food',
  location: 'CA'
}]]


function sortForPie(arr, sortBy, accType = undefined) {
  const colorArr = ['#b5e37e', '#7db9ec', '#b784f2', '#f28ec4', '#eeaf7a', '#f66555', '#ffc66f', '#f8f9d4', '#3cccd0', '#008cd0']
  const obj = {};
  const output = [];
  let incColor = 0;

  arr.forEach(inArr => {
    if (accType) {
      if (obj[inArr[0].sortBy]) {
        obj[inArr[0].sortBy] += inArr[0].accType;
      } else {
        obj[inArr[0].sortBy] = inArr[0].accType;
      }
    } else {
      // console.log("here")
      if (obj[inArr[0][sortBy]]) {
        obj[inArr[0][sortBy]] += 1;
      } else {
        obj[inArr[0][sortBy]] = 1;
      }
    }
    // console.log("fire?", obj)
  })

  for (let key in obj) {
    output.push({ title: key, value: obj[key], color: colorArr[incColor] })
    incColor++;
    if (incColor > colorArr.length - 1) incColor = 0;
  }

  return output;
}

const DataVis = ({ isCharity }) => {
  const sum = isCharity ? isCharity.reduce((acc, val) => acc + Number(val.amount), 0) : 0;
  const obj = {};



  const pie = <PieChart className='pieChart'

    data={
      sortForPie(dummyData, "categoryName")
    }
  />;
  let total = 0;
  isCharity.forEach(obj => {
    total += Number(obj.donatedAmount);
  })

  return (
    <div id='pie-container'>
      <h1>Data Visual</h1>
      <p>Total: {sum}</p>
      <div id='pie'>{pie}</div>
    </div>

  )
}
export default DataVis;

  // const pieKey = () => {

  //   return (

  //     <div>
  //       <button color={}></button>
  //       <p></p>
  //     </div>

  //     )
  //   }