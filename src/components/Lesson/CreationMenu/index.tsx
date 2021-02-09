import React, {FunctionComponent, useCallback, useEffect, useRef, useState} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFile, faImage, faMusic, faVideo, faPlus} from '@fortawesome/free-solid-svg-icons'
import CreationButton, {Props as CreationButtonProps} from './CreationButton'
import {LessonBlockType} from "../../../reducers/lessons/types"
import Section from "../../Section"
import {Button, Tooltip, Typography, Divider} from "antd"
import styles from './styles.scss'

interface Props {
  onSelect: (type: LessonBlockType) => void,
}

const CreationMenu: FunctionComponent<Props> = ({ onSelect }) => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const menuEl = useRef<HTMLElement>(null)

  const onSelectContainer = useCallback((type: LessonBlockType) => {
    return (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault()
      onSelect && onSelect(type)
      setOpen(false)
    }
  }, [onSelect, setOpen])

  const outsideClickHandler = useCallback((evt: MouseEvent) => {
    if (isOpen && menuEl && !menuEl.current!.contains(evt!.target as HTMLElement)) {
      setOpen(false)
    }
  }, [isOpen, menuEl, setOpen])

  useEffect(() => {
    document.addEventListener('click', outsideClickHandler, false)
    return () => document.removeEventListener('click', outsideClickHandler)
  }, [outsideClickHandler])

  const menu: CreationButtonProps[] = [
    {
      title: 'Галерея',
      icon: <FontAwesomeIcon icon={faImage}/>,
      onClick: onSelectContainer(LessonBlockType.GALLERY),
    }, {
      title: 'Видео',
      icon: <FontAwesomeIcon icon={faVideo}/>,
      onClick: onSelectContainer(LessonBlockType.VIDEO),
    }, {
      title: 'Аудио',
      icon: <FontAwesomeIcon icon={faMusic}/>,
      onClick: onSelectContainer(LessonBlockType.AUDIO),
    }, {
      title: 'Файл',
      icon: <FontAwesomeIcon icon={faFile}/>,
      onClick: onSelectContainer(LessonBlockType.FILE),
    },
  ]

  return (
    <Section
      containerRef={menuEl}
      className={styles.creationMenuContainer}
    >
      {isOpen ? (
        <div className={styles.creationButtonsContainer}>
          <Divider />
          <Typography.Title level={4}>Выбери тип блока</Typography.Title>
          <div>
            {menu.map((item, idx) => (
              <CreationButton key={idx} {...item} />
            ))}
          </div>
          <Divider />
        </div>
      ) : (
        <Divider>
          <Tooltip
            placement="top"
            title="Добавить блок"
          >
            <Button
              onClick={() => setOpen(true)}
              block={true}
              shape="circle"
              type="default"
              size="small"
              icon={<FontAwesomeIcon icon={faPlus}/>}
            />
          </Tooltip>
        </Divider>
      )}
    </Section>
  )
}

export default CreationMenu
