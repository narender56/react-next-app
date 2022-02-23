const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const GraphQLSchema = require('./schema')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true
  })
)

app.listen(8000, () => {
  console.log('Server is on http://localhost:8000')
})