import React, {FunctionComponent} from "react"
import Loader from "../../components/Loader"
import styles from './styles.scss'

const LoadingScreen: FunctionComponent<{}> = () => {
  return (
    <div className={styles.loadingScreen}>
      <Loader/>
    </div>
  )
}

export default LoadingScreen
