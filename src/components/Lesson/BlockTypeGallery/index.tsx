import React, {FunctionComponent, useCallback, useState} from "react"
import {
  LessonBlockGallery,
  LessonBlockGallerySlide,
} from "../../../reducers/lessons/types"
import {Button, Input, Typography} from "antd"
import styles from './styles.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faImage} from "@fortawesome/free-solid-svg-icons"
import Gallery from "../../Gallery"
import {LessonBlockGalleryData, LessonBlockGallerySlideData} from "../../../reducers/lessons"

interface SlideProps extends LessonBlockGallerySlide {
  idx: number,
  onChange: (idx: number, data: LessonBlockGallerySlide) => void,
}

const Slide: FunctionComponent<SlideProps> = ({ idx, image, description, onChange }) => {
  const [imageValue, setImageValue] = useState<string>(image)
  const [descriptionValue, setDescriptionValue] = useState<string>(description)

  const onApplyValue = useCallback((image: string, description: string) => {
    if (imageValue) {
      onChange(idx, new LessonBlockGallerySlideData(image, description))
    }
  }, [onChange, imageValue, descriptionValue])

  return (
    <div className={styles.blockTypeGallerySlide}>
      <div className={styles.blockTypeGallerySplash}>
        {image ? (
          <div
            className={styles.blockTypeGalleryImage}
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <>
            <FontAwesomeIcon
              icon={faImage}
              size={'3x'}
              color="rgba(0, 0, 0, 0.5)"
            />
            <br/>
            <Typography.Paragraph>
              Вставьте ссылку на изображение...
            </Typography.Paragraph>
          </>
        )}
      </div>
      <div className={styles.blockTypeGalleryInput}>
        <Input
          placeholder="Ссылка на изображение..."
          value={imageValue}
          onChange={evt => setImageValue(evt.target.value)}
          onPressEnter={() => onApplyValue(imageValue, descriptionValue)}
        />
        <Button
          icon={(<FontAwesomeIcon icon={faCheck} />)}
          onClick={() => onApplyValue(imageValue, descriptionValue)}
        />
      </div>
      <div className={styles.blockTypeGalleryInput}>
        <Input
          placeholder="Описание..."
          value={descriptionValue}
          onChange={evt => setDescriptionValue(evt.target.value)}
          onPressEnter={() => onApplyValue(imageValue, descriptionValue)}
        />
        <Button
          icon={(<FontAwesomeIcon icon={faCheck} />)}
          onClick={() => onApplyValue(imageValue, descriptionValue)}
        />
      </div>
    </div>
  )
}

export interface Props extends LessonBlockGallery {
  onChange: (data: LessonBlockGallery) => void,
}

const BlockTypeGallery: FunctionComponent<Props> = ({ slides, onChange }) => {
  const modSlides: LessonBlockGallerySlide[] = [ ...slides, {
    image: '',
    description: '',
  }]

  const onUpdateSlide = useCallback((idx: number, slide: LessonBlockGallerySlide) => {
    const newSlides = [ ...slides ]
    if (newSlides[idx]) {
      newSlides[idx] = slide
    } else {
      newSlides.push(slide)
    }
    console.log(new LessonBlockGalleryData(newSlides))
    onChange(new LessonBlockGalleryData(newSlides))
  }, [slides, onChange])

  const gallerySlides: JSX.Element[] = modSlides.map((slide, idx) => (
    <Slide
      key={idx}
      idx={idx}
      onChange={onUpdateSlide}
      image={slide.image}
      description={slide.description}
    />
  ))

  return (
    <div className={styles.blockTypeGalleryContainer}>
      <Gallery slides={gallerySlides}/>
    </div>
  )
}

export default BlockTypeGallery
