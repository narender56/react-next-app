import { type } from 'os'
import { useEffect, useState } from 'react'
import vehicleService from '../../../services/vehicleService'
import { Vehicle } from '../../../types/Vehicle'
import Select from '../../atoms/Select'
import SelectRange from '../../atoms/SelectRange'
import styles from './Filters.module.css'

type FromTo = {
  from: string,
  to: string
}

type FilterTypes = {
  make: string,
  model: string,
  mileage: FromTo,
  power: FromTo,
  registration: string,
  fuel: string,
  price: FromTo,
  gearbox: string,
  exteriorColor: string,
  category: string
}

type Dropdown = {
  label: string,
  value: string
}

const Filters = () => {
  const [filters, setFilters] = useState<FilterTypes>({
    make: '',
    model: '',
    mileage: {
      from: '',
      to: ''
    },
    power: {
      from: '',
      to: ''
    },
    registration: '',
    fuel: '',
    price: {
      from: '',
      to: ''
    },
    gearbox: '',
    exteriorColor: '',
    category: ''
  })

  const [makes, setMakes] = useState<Dropdown[]>([])

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

  const handleSelectRangeChange = (source: object, prop: string, newValue: string) => {
    setFilters({...filters, mileage: { ...filters.mileage, [prop]: newValue}})
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.filter_wrapper}>
        <div className={styles.header}>Make</div>
        <Select
          placeholder='Select'
          options={makes}
          value={filters.make}
          onChange={make => setFilters({...filters, make})}
          />
      </div>
      <div className={styles.filter_wrapper}>
        <div className={styles.header}>Model</div>
        <Select
          placeholder='Select'
          options={[{label: 'Polo', value: 'polo'}]}
          value={filters.model}
          onChange={model => setFilters({...filters, model})}
          />
      </div>
      <div className={styles.filter_wrapper}>
        <SelectRange
          label='Milage'
          from={{value: filters.mileage.from, placeholder: 'From', options: [{ label: '10', value: '10'}]}}
          to={{value: filters.mileage.to, placeholder: 'To', options: [{ label: '10', value: '10'}]}}
          onChange={(key: string, newValue: string) => handleSelectRangeChange(filters.mileage, key, newValue)}
        />
      </div>
    </div>
  )
}

export default Filters
