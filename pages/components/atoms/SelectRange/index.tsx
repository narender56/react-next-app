import { useState } from 'react'
import Select from '../Select'
import styles from './SelectRange.module.css'

type Option = {
  label: string,
  value: string
}

type SelectRangeTypes = {
  label: string,
  from: {
    options: Option[],
    value: string,
    placeholder: string
  },
  to: {
    options: Option[],
    value: string,
    placeholder: string
  },
  onChange: (source: string, value: string) => void
}

const SelectRange = ({ label, from, to, onChange }: SelectRangeTypes) => {
  const handleOnChange = (source: string, value: string) => {
    onChange(source, value)
  }
  
  return (
    <div className={styles.filter_wrapper}>
      <div className={styles.header}>{label}</div>
      <div className={styles.input_wrapper}>
        <Select
          placeholder={from.placeholder}
          options={from.options}
          value={from.value}
          onChange={fromValue => handleOnChange('from', fromValue)}
          classes={styles.select_override}
          />
        <Select
          placeholder={to.placeholder}
          options={to.options}
          value={to.value}
          onChange={toValue => handleOnChange('to', toValue)}
          classes={styles.select_override}
          />
      </div>
    </div>
  )
}

export default SelectRange
