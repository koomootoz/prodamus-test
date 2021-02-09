import {Draft, produce} from "immer"
import omit from 'lodash/omit'
import {
  LessonActionsType, LessonBlockAudio,
  LessonBlockDataState,
  LessonBlockDescription, LessonBlockFile, LessonBlockGallery, LessonBlockGallerySlide,
  LessonBlockMovePosition,
  LessonBlockTitle,
  LessonBlockType,
  LessonBlockVideo,
  LessonBlockVideoType,
  LessonsActions,
  LessonsState
} from "./types"

// Data models
export class LessonBlockTitleData implements LessonBlockTitle {
  constructor(
    public text: string = ''
  ) {}
}

export class LessonBlockDescriptionData implements LessonBlockDescription {
  constructor(
    public text: string = ''
  ) {}
}

export class LessonBlockVideoData implements LessonBlockVideo {
  constructor(
    public type: LessonBlockVideoType = LessonBlockVideoType.YOUTUBE,
    public id: string = ''
  ) {}
}

export class LessonBlockAudioData implements LessonBlockAudio {
  constructor(
    public src: string = ''
  ) {}
}

export class LessonBlockGalleryData implements LessonBlockGallery {
  constructor(
    public slides: LessonBlockGallerySlideData[] = []
  ) {}
}

export class LessonBlockGallerySlideData implements LessonBlockGallerySlide {
  constructor(
    public image: string = '',
    public description: string = '',
  ) {}
}

export class LessonBlockFileData implements LessonBlockFile {
  constructor(
    public name: string = '',
    public description: string = '',
  ) {}
}

const initialState = (): LessonsState => {
  return {
    create: {
      blocks: [
        {
          type: LessonBlockType.TITLE,
          data: new LessonBlockTitleData(),
          isRequired: true,
        }, {
          type: LessonBlockType.DESCRIPTION,
          data: new LessonBlockDescriptionData(),
          isRequired: true,
        },
      ],
    },
    list: [],
  }
}

export default function lessonsReducer(
  state: LessonsState = initialState(),
  action: LessonActionsType
) {
  return produce(state, (draft: Draft<LessonsState>) => {
    switch (action.type) {
      case LessonsActions.LESSON_ADD_BLOCK:
        let blockData: LessonBlockDataState
        switch (action.payload.type) {
          case LessonBlockType.TITLE:
            blockData = new LessonBlockTitleData()
            break

          case LessonBlockType.DESCRIPTION:
            blockData = new LessonBlockDescriptionData()
            break

          case LessonBlockType.VIDEO:
            blockData = new LessonBlockVideoData()
            break

          case LessonBlockType.AUDIO:
            blockData = new LessonBlockAudioData()
            break

          case LessonBlockType.GALLERY:
            blockData = new LessonBlockGalleryData()
            break

          case LessonBlockType.FILE:
            blockData = new LessonBlockFileData()
            break
        }

        draft.create.blocks.push({
          type: action.payload.type,
          data: blockData,
          isRequired: false,
        })
        break

      case LessonsActions.LESSON_REMOVE_BLOCK:
        draft.create.blocks.splice(action.payload.idx, 1)
        break

      case LessonsActions.LESSON_MOVE_BLOCK:
        const { blocks } = draft.create
        const { idx, position } = action.payload
        draft.create.blocks[idx] = blocks.splice(
          position === LessonBlockMovePosition.UP ? idx + 1 : idx - 1,
          1,
          blocks[idx]
        )[0]
        break

      case LessonsActions.LESSON_UPDATE_BLOCK:
        // @ts-ignore
        draft.create.blocks[action.payload.idx] = {
          ...draft.create.blocks[action.payload.idx],
          ...omit(action.payload, ['idx']),
        }
        break

      case LessonsActions.LESSON_RESET:
        draft.create = initialState().create
        break
    }
  })
}
