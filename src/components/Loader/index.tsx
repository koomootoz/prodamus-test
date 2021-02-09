import React, {FunctionComponent} from "react"
import styles from './styles.scss'

const Loader: FunctionComponent = () => {
  return (
    <div className={styles.loadingContainer}>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

export default Loader
