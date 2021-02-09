import React, {FunctionComponent, useEffect, useRef, useState} from "react"
import { LessonBlockTitle } from "../../../reducers/lessons/types"
import { Input } from "antd"
import styles from './styles.scss'
import {LessonBlockTitleData} from "../../../reducers/lessons";

export interface Props extends LessonBlockTitle {
  onChange: (data: LessonBlockTitle) => void,
}

const BlockTypeTitle: FunctionComponent<Props> = ({ text, onChange }) => {
  const [value, setValue] = useState<string>(text)
  const timerRef = useRef<number>(-1)

  useEffect(() => {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => value && onChange(new LessonBlockTitleData(value)), 300)
  }, [value, timerRef])

  return (
    <div className={styles.blockTypeTitleContainer}>
      <Input
        size="large"
        placeholder="Заголовок..."
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
    </div>
  )
}

export default BlockTypeTitle
