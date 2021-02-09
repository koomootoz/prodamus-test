import {
  LessonAddBlock,
  LessonBlockDataState,
  LessonBlockMovePosition,
  LessonBlockType,
  LessonMoveBlock,
  LessonRemoveBlock, LessonReset,
  LessonsActions,
  LessonUpdateBlock
} from "./types"

export function lessonAddBlock(type: LessonBlockType): LessonAddBlock {
  return {
    type: LessonsActions.LESSON_ADD_BLOCK,
    payload: { type }
  }
}

export function lessonRemoveBlock(idx: number): LessonRemoveBlock {
  return {
    type: LessonsActions.LESSON_REMOVE_BLOCK,
    payload: { idx }
  }
}

export function lessonUpdateBlock(idx: number, data: Partial<LessonBlockDataState>): LessonUpdateBlock {
  return {
    type: LessonsActions.LESSON_UPDATE_BLOCK,
    payload: { idx, data },
  }
}

export function lessonMoveBlock(idx: number, position: LessonBlockMovePosition): LessonMoveBlock {
  return {
    type: LessonsActions.LESSON_MOVE_BLOCK,
    payload: { idx, position },
  }
}

export function lessonReset(): LessonReset {
  return {
    type: LessonsActions.LESSON_RESET,
  }
}
