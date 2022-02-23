import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import CarInfoCard from './components/molecules/CarInfoCard/CarInfoCard'
import Filters from './components/molecules/Filters/Filters'
import VehicleService from './services/vehicleService'
import { Vehicle } from './types/Vehicle'

const Home: NextPage = () => {
  const [vehicleList, setVehicleList] = useState<Vehicle[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await VehicleService.fetchRecords()
      setVehicleList(response.records)
    }

    fetchData()
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/icomoon/style.css" />
      </Head>

      <main className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.filter_wrapper}>
            <Filters />
          </div>
          <div className={styles.grid}>
            {
              vehicleList.map(record => {
                return <CarInfoCard key={record.vehicleId} record={record} />
              })
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
