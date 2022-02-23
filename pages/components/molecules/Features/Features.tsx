import styles from './Features.module.css'
import Feature, { FeatureProps } from '../../atoms/Feature/Feature'

type FeaturesProps = {
  featuresList: FeatureProps[]
}

const Features = ({ featuresList }: FeaturesProps) => {
  return (
    <div className={styles.wrapper}>
      {
        featuresList.map((feature: FeatureProps) => <Feature key={feature.label} {...feature }/>)
      }
    </div>
  )
}

export default Features
