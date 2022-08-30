import React from 'react'
import { Select } from '../Select/Select'

import styles from './SelectRange.module.css'
import type { SelectRangeTypes } from './SelectRange.types'

export const SelectRange = ({ label, from, to, onChange }: SelectRangeTypes) => {
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
          onChange={fromValue => handleOnChange(from.key, fromValue)}
          classes={styles.select_override}
          />
        <Select
          placeholder={to.placeholder}
          options={to.options}
          value={to.value}
          onChange={toValue => handleOnChange(to.key, toValue)}
          classes={styles.select_override}
          />
      </div>
    </div>
  )
}
