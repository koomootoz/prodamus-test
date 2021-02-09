import React, {FunctionComponent, ReactNode, RefObject} from "react"
import classNames from "classnames"
import styles from './styles.scss'

export interface Props {
  dark?: boolean,
  children?: ReactNode,
  className?: string,
  containerRef?: any,
}

const Section: FunctionComponent<Props> = ({
  dark,
  children,
  className,
  containerRef,
}) => {
  const classes: string = classNames(className || '', {
    [styles.section]: true,
    [styles.sectionDark]: dark,
  })

  return (
    <section ref={containerRef} className={classes}>
      {children}
    </section>
  )
}

Section.defaultProps = {
  dark: false,
}

export default Section
