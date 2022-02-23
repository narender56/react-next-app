const { GraphQLObjectType, GraphQLString,  GraphQLInt,  GraphQLSchema, GraphQLNonNull, GraphQLList } = require('graphql')

const { records } = require('./data')

const RecordsType = new GraphQLObjectType({
  name: 'Record',
  fields: () => {
    return {
      vehicleId: { type: GraphQLString },
      make: { type: GraphQLString },
      model: { type: GraphQLString },
      fuel: { type: GraphQLString },
      price: { type: GraphQLInt },
      monthlyInstallment: { type: GraphQLInt },
      image: { type: GraphQLString },
    }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    records: {
      type: new GraphQLList(RecordsType),
      args: {
        make: { type: GraphQLString },
        model: { type: GraphQLString },
        vehicleId: { type: GraphQLString },
        fuel: { type: GraphQLString },
        price: { type: GraphQLInt },
        monthlyInstallment: { type: GraphQLInt },
        image: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        const filters = Object.keys(args)
        if (filters.length) return

        return records.filter(record => {
          const hasMatch =  filters.every(key => args[key] === record[key])
          return hasMatch
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})