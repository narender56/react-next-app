import { useEffect, useState } from 'react'

import vehicleService from '../../services/vehicleService'
import { Vehicle } from '../../types/Vehicle'
import { Button, Select, SelectRange } from '../../atoms'
import { priceOptions } from '../../helpers'

import { FilterTypes, Dropdown } from './Filters.types'
import styles from './Filters.module.css'

interface FiltersProps {
  onFilterChange: (newValue: FilterTypes) => void
}

const defaultFilters = () => ({
  make: '',
  model: '',
  mileageFrom: 0,
  mileageTo: 0,
  powerFrom: 0,
  powerTo: 0,
  registration: '',
  fuel: '',
  priceFrom: 0,
  priceTo: 0,
  gearbox: '',
  exteriorColor: '',
  category: ''
})

export const Filters = ({ onFilterChange }: FiltersProps) => {
  const [filters, setFilters] = useState<FilterTypes>(defaultFilters())
  const [makes, setMakes] = useState<Dropdown[]>([])
  const [models, setModels] = useState<Dropdown[]>([])

  useEffect(() => {
    const fetchMakes = async () => {
      const response = await vehicleService.fetchMakes()
      const makesOptions: Dropdown[] = []
      response.records.forEach((vehicle: Vehicle) => {
        if (!makesOptions.find(option => option.value === vehicle.make)) {
          makesOptions.push({ label: vehicle.make, value: vehicle.make})
        }
      })

      setMakes(makesOptions)
    }

    fetchMakes()
  }, [])

  useEffect(() => {
    onFilterChange(filters)
  }, [filters])

  const fetchModelsByMake = async (make: string) => {
    try {
      const response = await vehicleService.fetchModelsByMake(make)
      if (response.records) {
        const modelsOptions: Dropdown[] = []
        response.records.forEach((vehicle: Vehicle) => {
          if (!modelsOptions.find(option => option.value === vehicle.model)) {
            modelsOptions.push({ label: vehicle.model, value: vehicle.model })
          }
        })

        setModels(modelsOptions)
      }
    } catch(err) {}
  }

  const handleMakeChange = (make: string) => {
    setFilters({...filters, make})
    fetchModelsByMake(make)
  }

  const resetFilters = () => {
    setFilters(defaultFilters())
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.filter_wrapper}>
        <div className={styles.header}>Make</div>
        <Select
          placeholder='Select'
          options={makes}
          value={filters.make}
          onChange={handleMakeChange}
          />
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.header}>Model</div>
        <Select
          placeholder='Select'
          options={models}
          value={filters.model}
          onChange={model => setFilters({...filters, model})}
          />
      </div>
      <div className={styles.filter_wrapper}>
        <SelectRange
          label='Price'
          from={{key: 'priceFrom', value: filters.priceFrom, placeholder: 'From', options: priceOptions}}
          to={{ key: 'priceTo', value: filters.priceTo, placeholder: 'To', options: priceOptions}}
          onChange={(key: string, newValue: string) => setFilters({ ...filters, [key]: parseInt(newValue) })}
        />
      </div>
      <Button className={styles.reset_filters} onClick={resetFilters}>
        Reset Filters
      </Button>
    </div>
  )
}
