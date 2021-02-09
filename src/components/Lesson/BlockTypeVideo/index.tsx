import React, {FunctionComponent, useCallback, useState} from "react"
import {LessonBlockTitle, LessonBlockVideo, LessonBlockVideoType} from "../../../reducers/lessons/types"
import {Button, Input, Typography} from "antd"
import styles from './styles.scss'
import VideoPlayer from "../../VideoPlayer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faFilm} from '@fortawesome/free-solid-svg-icons'
import {LessonBlockVideoData} from "../../../reducers/lessons";
import getVideoTypeFromURL from "../../../utils/getVideoTypeFromURL";
import youtubeParseURL from "../../../utils/youtubeParseURL";


export interface Props extends LessonBlockVideo {
  onChange: (data: LessonBlockVideo) => void,
}

const BlockTypeVideo: FunctionComponent<Props> = ({ id, type, onChange }) => {
  const [value, setValue] = useState<string>(id ? `https://youtu.be/${id}` : '')

  // youtubeParseURL(url)
  // getVideoTypeFromURL(value)

  const onApplyValue = useCallback((value: string) => {
    const detectedVideoType: LessonBlockVideoType = getVideoTypeFromURL(value)
    const detectedVideoCode: string | undefined = youtubeParseURL(value)

    if (detectedVideoType !== LessonBlockVideoType.UNKNOWN && detectedVideoCode) {
      onChange(new LessonBlockVideoData(
        detectedVideoType,
        detectedVideoCode,
      ))
    }
  }, [onChange, value])

  return (
    <div className={styles.blockTypeVideoContainer}>
      {id ? (
        <VideoPlayer
          width={560}
          type={type}
          id={id}
        />
      ) : (
        <div className={styles.blockTypeVideoSplash}>
          <FontAwesomeIcon
            icon={faFilm}
            size={'3x'}
            color="rgba(0, 0, 0, 0.5)"
          />
          <br/>
          <Typography.Paragraph>
            Вставьте ссылку на видео...
          </Typography.Paragraph>
        </div>
      )}
      <div className={styles.blockTypeVideoInput}>
        <Input
          placeholder="Ссылка на видео..."
          value={value}
          onChange={evt => setValue(evt.target.value)}
          onPressEnter={() => onApplyValue(value)}
        />
        <Button
          icon={(<FontAwesomeIcon icon={faCheck} />)}
          onClick={() => onApplyValue(value)}
        />
      </div>
    </div>
  )
}

export default BlockTypeVideo
