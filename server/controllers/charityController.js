
const charityController = {};
const fetch = require('node-fetch');
charityController.fetchData = (req, res, next) => {
  // const { preferences } = req.body;
  const preferences = {
    fundraisingOrgs: true,
    state: null,
    ids: [1, 2, 5, 6]
  }
  const fundraisingOrgs = preferences.fundraisingOrgs || false;
  const state = preferences.state || 'CA';
  const { ids } = preferences;
  const arrayOfPromises = ids.map(id => {
    return new Promise(function (resolve, reject) {
      fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_ID}&app_key=${process.env.CHARITY_KEY}&rated=true&fundraisingOrgs=${fundraisingOrgs}&sort=RATING:DESC&pageSize=1&categoryID=${id}&state=${state}`)
        .then(res => res.json())
        .then(data => {
          const result = data.map(object => {
            return {
              name: object.charityName,
              mission: object.mission,
              url: object.websiteURL,
              tagLine: object.tagLine,
              score: object.currentRating.score,
              stars: object.currentRating.ratingImage.large,
              categoryName: object.category.categoryName,
              location: object.mailingAddress.stateOrProvince
            }
          })
          resolve(result)
        })
        .catch(err => {
          reject(err)
        })
    })
  })
  Promise.all(arrayOfPromises)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      return next(err);
    })
}
module.exports = charityController;

// const arr = [
//   'Animals',
//   'Arts, Culture, Humanities',
//   'Community Development',
//   'Education',
//   'Environment',
//   'Health',
//   'Human Services',
//   'Human and Civil Rights',
//   'International',
//   'Research and Public Policy'];


