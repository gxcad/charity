const {
  GraphQLObjectType,
  // GraphQLInt,
  GraphQLString,
  // GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
const fetch = require('node-fetch');
const Charity = new GraphQLObjectType({
  name: 'charity',
  fields: () => ({
    charityNavigatorURL: { type: GraphQLString },
    mission: { type: GraphQLString },
    websiteURL: { type: GraphQLString },
    tagLine: { type: GraphQLString },
    charityName: { type: GraphQLString },
    currentRating: { type: Rating }
  })
})

const Rating = new GraphQLObjectType({
  name: 'Rating',
  fields: () => ({
    ratingImage: { type: Size },
  })
})
const Size = new GraphQLObjectType({
  name: 'Size',
  fields: () => ({
    large: { type: GraphQLString },
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    charity: {
      type: new GraphQLList(Charity),
      resolve(parent, args) {
        return fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_ID}&app_key=${process.env.CHARITY_KEY}&rated=true&fundraisingOrgs=${true}&sort=RATING:DESC&pageSize=1&categoryID=${2}&state=${'CA'}`)
          .then(res => res.json())
          .then(result => {
            // console.log(result)
            return result
          })
      }
    }
  }
})
module.exports = new GraphQLSchema({
  query: RootQuery
});