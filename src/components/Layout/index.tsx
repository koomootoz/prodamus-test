import React, {FunctionComponent, ReactNode} from "react"
import classNames from "classnames"
import styles from './styles.scss'

interface Props {
  children?: ReactNode,
  className?: string,
}

const Layout: FunctionComponent<Props> = ({
  children ,
  className,
}) => {
  return (
    <div className={classNames(styles.layoutContainer, className)}>
      <main className={styles.layoutContent}>
        {children}
      </main>
      <footer className={styles.layoutFooter}/>
    </div>
  )
}

export default Layout
