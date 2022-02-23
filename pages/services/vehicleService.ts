import { gql } from "@apollo/client"
import apolloClient from "./apolloClient"

class VehicleService {
  constructor() {} //

  async fetchRecords() {
     const response = await apolloClient.query({
       query: gql `
        {
          records {
            make,
            model,
            vehicleId,
            monthlyInstallment,
            fuel,
            price,
            image
          }
        }
       `
    })

    return response.data
  }

  async fetchMakes() {
    const response = await apolloClient.query({
      query: gql `
       {
         records {
           make,
           vehicleId
         }
       }
      `
   })

   return response.data
  }

  async fetchModelsByMake(make: string) {
    const response = await apolloClient.query({
      query: gql `
      {
        records(make: ${make}){
          make,
          model,
          vehicleId
        }
      }
      `
  })

  return response.data
  }
}

export default new VehicleService()