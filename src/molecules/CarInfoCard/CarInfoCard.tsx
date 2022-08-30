import React from 'react'
import { Vehicle } from '../../types/Vehicle'
import Features from '../Features/Features'
import { featuresList} from '../../helpers'

import styles from './CarInfoCard.module.css'

interface CarInfoCardProps {
  record: Vehicle;
}

export const CarInfoCard = ({ record }: CarInfoCardProps) => {
  return (
    <div className={styles.card}>
      <img src={record.image} className={styles.banner}/>
      <div className={styles.wrapper}>
        <a className={styles.title} href='#'>{record.make} {record.model} &rarr;</a>
        <Features featuresList={featuresList} />
        <div className={styles.footer}>
          <div className={styles.pricestart}>from €{record.monthlyInstallment}/month</div>
          <span>€{record.price}</span>
        </div>
      </div>
    </div>
  )
}
