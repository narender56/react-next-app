import styles from './Feature.module.css'
import classNames from 'classnames'

export type FeatureProps = {
  label: string,
  icon: string
}

const Feature = ({ label, icon }: FeatureProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={classNames(`icon-${icon}`, styles.icon)}></span>
      <div className={classNames(styles.label)}>{label}</div>
    </div>
  )
}

export default Feature
