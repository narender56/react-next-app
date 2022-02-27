import { gql } from "@apollo/client"
import { FilterTypes } from "../types/FiltersTypes"
import apolloClient from "./apolloClient"

class VehicleService {
  constructor() {} //

  async fetchRecords(filters?: FilterTypes) {
     const response = await apolloClient.query({
       query: gql `
        query GetRecords($make: String, $model: String, $priceFrom: Int, $priceTo: Int, $mileageFrom: Int, $mileageTo: Int) {
          records(make: $make, model: $model, priceFrom: $priceFrom, priceTo: $priceTo, mileageFrom: $mileageFrom, mileageTo: $mileageTo) {
            make,
            model,
            vehicleId,
            monthlyInstallment,
            fuel,
            price,
            mileage,
            image
          }
        }
       `,
       variables: filters
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
        records(make: "${make}"){
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