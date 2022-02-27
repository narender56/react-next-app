import { Vehicle } from '../../../types/Vehicle'
import Features from '../Features/Features'
import styles from './CarInfoCard.module.css'

const featuresList = [
  {
    label: 'Petrol',
    icon: 'gas'
  },
  {
    label: '2014',
    icon: 'calendar'
  },
  {
    label: '32,000',
    icon: 'barometer'
  },
  {
    label: '1800 cc',
    icon: 'refresh-ccw'
  }
]

type CarInfoCardProps = {
  record: Vehicle
}

const CarInfoCard = ({ record }: CarInfoCardProps) => {
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

export default CarInfoCard
