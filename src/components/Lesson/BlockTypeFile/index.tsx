import React, {FunctionComponent, useRef, useState, useCallback, SyntheticEvent, useEffect} from "react"
import {LessonBlockFile} from "../../../reducers/lessons/types"
import {Button, Input} from "antd"
import styles from './styles.scss'
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LessonBlockFileData, LessonBlockTitleData} from "../../../reducers/lessons";

export interface Props extends LessonBlockFile {
  onChange: (data: LessonBlockFile) => void,
}

const BlockTypeFile: FunctionComponent<Props> = ({ description, onChange }) => {
  const fileInput = useRef<HTMLInputElement | null>(null)

  const [nameValue, setNameValue] = useState<string>(name)
  const [descriptionValue, setDescriptionValue] = useState<string>(description)

  const selectFile = useCallback(
    (evt: SyntheticEvent<HTMLInputElement>) => {
      evt.preventDefault()
      if (evt.currentTarget.files) {
        const file: File = evt.currentTarget.files[0]
        setNameValue(file.name)
        onChange(new LessonBlockFileData(file.name, descriptionValue))
      }
    }, [setNameValue, descriptionValue])

  const timerRef = useRef<number>(-1)

  useEffect(() => {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => descriptionValue && onChange(new LessonBlockFileData(nameValue, descriptionValue)), 300)
  }, [descriptionValue, timerRef])

  return (
    <div className={styles.blockTypeFileContainer}>
      <div className={styles.blockTypeFileIcon}>
        <FontAwesomeIcon
          icon={faFile}
          size={'3x'}
          color="rgba(0, 0, 0, 0.5)"
        />
      </div>
      <div className={styles.blockTypeFileInputs}>
        <input
          className={styles.blockTypeFileInput}
          ref={fileInput}
          type="file"
          onChange={selectFile}
        />
        <Input
          placeholder="Имя файла..."
          value={nameValue}
          size={'small'}
          onChange={evt => setNameValue(evt.target.value)}
        />
        <Input
          placeholder="Описание файла..."
          value={descriptionValue}
          size={'small'}
          onChange={evt => setDescriptionValue(evt.target.value)}
        />
      </div>
      <div className={styles.blockTypeFileButton}>
        <Button
          type="primary"
          size={'large'}
          onClick={() => fileInput.current ? fileInput.current.click() : false}
        >
          Выбрать файл
        </Button>
      </div>
    </div>
  )
}

export default BlockTypeFile
