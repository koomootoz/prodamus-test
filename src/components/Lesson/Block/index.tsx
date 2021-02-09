import React, {FunctionComponent, useCallback, useMemo} from "react"
import {
  LessonBlockDataState,
  LessonBlockDescription,
  LessonBlockState,
  LessonBlockTitle,
  LessonBlockType,
  LessonBlockVideo,
  LessonBlockGallery, LessonBlockFile, LessonBlockAudio,
} from "../../../reducers/lessons/types"
import Section from "../../Section"
import CreationMenu from "../CreationMenu"
import BlockTypeTitle from "../BlockTypeTitle"
import styles from './styles.scss'
import BlockTypeDescription from "../BlockTypeDescription";
import BlockTypeVideo from "../BlockTypeVideo";
import BlockTypeGallery from "../BlockTypeGallery";
import BlockTypeFile from "../BlockTypeFile";
import BlockTypeAudio from "../BlockTypeAudio";

export interface BlockProps extends LessonBlockState {
  idx: number
  addBlock: (type: LessonBlockType) => void
  updateBlock: (idx: number, data: Partial<LessonBlockDataState>) => void
}

const Block: FunctionComponent<BlockProps> = ({ idx, type, data, isRequired, addBlock, updateBlock }) => {
  const isDark = useMemo<boolean>(
    () => [
      LessonBlockType.VIDEO,
      LessonBlockType.GALLERY,
    ].indexOf(type) !== -1,
    [type]
  )

  const onChangeBlockData = useCallback((data: Partial<LessonBlockDataState>) => updateBlock(idx, data), [idx])

  return (
    <>
      <Section dark={isDark} className={styles.block}>
        {(() => {
          switch (type) {
            case LessonBlockType.TITLE:
              return (
                <BlockTypeTitle
                  onChange={onChangeBlockData}
                  text={(data as LessonBlockTitle).text}
                />
              )

            case LessonBlockType.DESCRIPTION:
              return (
                <BlockTypeDescription
                  onChange={onChangeBlockData}
                  text={(data as LessonBlockDescription).text}
                />
              )

            case LessonBlockType.VIDEO:
              return (
                <BlockTypeVideo
                  onChange={onChangeBlockData}
                  type={(data as LessonBlockVideo).type}
                  id={(data as LessonBlockVideo).id}
                />
              )

            case LessonBlockType.GALLERY:
              return (
                <BlockTypeGallery
                  onChange={onChangeBlockData}
                  slides={(data as LessonBlockGallery).slides}
                />
              )

            case LessonBlockType.FILE:
              return (
                <BlockTypeFile
                  onChange={onChangeBlockData}
                  name={(data as LessonBlockFile).name}
                  description={(data as LessonBlockFile).description}
                />
              )

            case LessonBlockType.AUDIO:
              return (
                <BlockTypeAudio
                  onChange={onChangeBlockData}
                  src={(data as LessonBlockAudio).src}
                />
              )

            default:
              return <></>
          }
        })()}
      </Section>
      <CreationMenu
        onSelect={(type) => addBlock(type)}
      />
    </>
  )
}

export default Block
