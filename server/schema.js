const { GraphQLObjectType, GraphQLString,  GraphQLInt,  GraphQLSchema, GraphQLList } = require('graphql')

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
      mileage: { type: GraphQLInt },
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
        priceFrom: { type: GraphQLInt },
        priceTo: { type: GraphQLInt },
        mileageFrom: { type: GraphQLInt },
        mileageTo: { type: GraphQLInt },
        monthlyInstallment: { type: GraphQLInt },
        image: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        const filters = Object.keys(args).filter(key => args[key])
        if (!filters.length) records

        return records.filter(record => {
          const hasMatch = filters.every(key => {
            if (key === 'priceFrom' || key === 'mileageFrom' ) {
              const originalKey = key
              key = key.replace('From', '')
              return args[originalKey] <= record[key]
            }

            if (key === 'priceTo' || key === 'mileageTo') {
              const originalKey = key
              key = key.replace('To', '')
              return args[originalKey] >= record[key]
            }

            return args[key] === record[key]
          })
          return hasMatch
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})