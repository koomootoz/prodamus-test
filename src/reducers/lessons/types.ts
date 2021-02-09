// State types
export type ErrorState = object | string | null;

export enum LessonsActions {
  LESSON_ADD_BLOCK = '@app/LESSON_ADD_BLOCK',
  LESSON_REMOVE_BLOCK = '@app/LESSON_REMOVE_BLOCK',
  LESSON_UPDATE_BLOCK = '@app/LESSON_UPDATE_BLOCK',
  LESSON_MOVE_BLOCK = '@app/LESSON_MOVE_BLOCK',
  LESSON_RESET = '@app/LESSON_RESET',
}

export enum LessonBlockType {
  TITLE = 1,
  DESCRIPTION,
  VIDEO,
  AUDIO,
  GALLERY,
  FILE,
}

export enum LessonBlockVideoType {
  UNKNOWN,
  YOUTUBE,
}

export enum LessonBlockMovePosition {
  UP,
  DOWN,
}

export interface LessonBlockTitle {
  text: string,
}

export interface LessonBlockDescription {
  text: string,
}

export interface LessonBlockVideo {
  type: LessonBlockVideoType,
  id: string,
}

export interface LessonBlockAudio {
  src: string,
}

export interface LessonBlockGallery {
  slides: LessonBlockGallerySlide[],
}

export interface LessonBlockGallerySlide {
  image: string,
  description: string,
}

export interface LessonBlockFile {
  name: string,
  description: string,
}

export type LessonBlockDataState =
  LessonBlockTitle |
  LessonBlockDescription |
  LessonBlockVideo |
  LessonBlockAudio |
  LessonBlockGallery |
  LessonBlockFile

export interface LessonBlockState {
  type: LessonBlockType,
  isRequired: boolean,
  data: LessonBlockDataState,
}

export interface LessonState {
  blocks: LessonBlockState[]
}

export interface LessonsState {
  create: LessonState,
  list: LessonState[] | null,
}

// Actions types
export interface LessonAddBlock {
  type: typeof LessonsActions.LESSON_ADD_BLOCK,
  payload: { type: LessonBlockType },
}

export interface LessonRemoveBlock {
  type: typeof LessonsActions.LESSON_REMOVE_BLOCK,
  payload: { idx: number },
}

export interface LessonUpdateBlock {
  type: typeof LessonsActions.LESSON_UPDATE_BLOCK,
  payload: { idx: number, data: Partial<LessonBlockDataState> },
}

export interface LessonMoveBlock {
  type: typeof LessonsActions.LESSON_MOVE_BLOCK,
  payload: { idx: number, position: LessonBlockMovePosition },
}

export interface LessonReset {
  type: typeof LessonsActions.LESSON_RESET,
}

export type LessonActionsType =
  LessonAddBlock |
  LessonRemoveBlock |
  LessonUpdateBlock |
  LessonMoveBlock |
  LessonReset
