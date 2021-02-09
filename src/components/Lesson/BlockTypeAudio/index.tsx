import React, {FunctionComponent, useRef, useState, useCallback, SyntheticEvent, useEffect} from "react"
import {LessonBlockAudio, LessonBlockVideoType} from "../../../reducers/lessons/types"
import {Button, Input} from "antd"
import styles from './styles.scss'
import {faCheck, faFile} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LessonBlockAudioData, LessonBlockFileData, LessonBlockVideoData} from "../../../reducers/lessons";
import AudioPlayer from "../../AudioPlayer";

export interface Props extends LessonBlockAudio {
  onChange: (data: LessonBlockAudio) => void,
}

const BlockTypeAudio: FunctionComponent<Props> = ({ src, onChange }) => {
  const [srcValue, setSrcValue] = useState<string>(src)
  const timerRef = useRef<number>(-1)

  const onApplyValue = useCallback((value: string) => {
    if (srcValue) {
      onChange(new LessonBlockAudioData(srcValue))
    }
  }, [onChange, srcValue])

  useEffect(() => {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => srcValue && onChange(new LessonBlockAudioData(srcValue)), 300)
  }, [srcValue, timerRef])

  return (
    <div className={styles.blockTypeAudioContainer}>
      {src ? <AudioPlayer src={src}/> : null}
      <p/>
      <div className={styles.blockTypeAudioInput}>
        <Input
          placeholder="Ссылка на аудио файл..."
          value={srcValue}
          onChange={evt => setSrcValue(evt.target.value)}
        />
        <Button
          icon={(<FontAwesomeIcon icon={faCheck} />)}
          onClick={() => onApplyValue(srcValue)}
        />
      </div>
    </div>
  )
}

export default BlockTypeAudio
