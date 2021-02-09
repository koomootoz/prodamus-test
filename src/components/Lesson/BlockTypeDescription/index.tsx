import React, {FunctionComponent, useEffect, useRef, useState} from "react"
import {LessonBlockDescription } from "../../../reducers/lessons/types"
import { Input } from "antd"
import styles from './styles.scss'
import { LessonBlockDescriptionData } from "../../../reducers/lessons";

export interface Props extends LessonBlockDescription {
  onChange: (data: LessonBlockDescription) => void,
}

const BlockTypeDescription: FunctionComponent<Props> = ({ text, onChange }) => {
  const [value, setValue] = useState<string>(text)
  const timerRef = useRef<number>(-1)

  useEffect(() => {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => value && onChange(new LessonBlockDescriptionData(value)), 300)
  }, [value, timerRef])

  return (
    <div className={styles.blockTypeDescriptionContainer}>
      <Input.TextArea
        autoSize={{ minRows: 5 }}
        placeholder="Описание..."
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
    </div>
  )
}

export default BlockTypeDescription
