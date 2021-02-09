export declare type ErrorState = object | string | null;
export declare enum LessonsActions {
    LESSON_ADD_BLOCK = "@app/LESSON_ADD_BLOCK",
    LESSON_REMOVE_BLOCK = "@app/LESSON_REMOVE_BLOCK",
    LESSON_UPDATE_BLOCK = "@app/LESSON_UPDATE_BLOCK",
    LESSON_MOVE_BLOCK = "@app/LESSON_MOVE_BLOCK",
    LESSON_RESET = "@app/LESSON_RESET"
}
export declare enum LessonBlockType {
    TITLE = 1,
    DESCRIPTION = 2,
    VIDEO = 3,
    AUDIO = 4,
    GALLERY = 5,
    FILE = 6
}
export declare enum LessonBlockVideoType {
    UNKNOWN = 0,
    YOUTUBE = 1
}
export declare enum LessonBlockMovePosition {
    UP = 0,
    DOWN = 1
}
export interface LessonBlockTitle {
    text: string;
}
export interface LessonBlockDescription {
    text: string;
}
export interface LessonBlockVideo {
    type: LessonBlockVideoType;
    id: string;
}
export interface LessonBlockAudio {
    src: string;
}
export interface LessonBlockGallery {
    slides: LessonBlockGallerySlide[];
}
export interface LessonBlockGallerySlide {
    image: string;
    description: string;
}
export interface LessonBlockFile {
    name: string;
    description: string;
}
export declare type LessonBlockDataState = LessonBlockTitle | LessonBlockDescription | LessonBlockVideo | LessonBlockAudio | LessonBlockGallery | LessonBlockFile;
export interface LessonBlockState {
    type: LessonBlockType;
    isRequired: boolean;
    data: LessonBlockDataState;
}
export interface LessonState {
    blocks: LessonBlockState[];
}
export interface LessonsState {
    create: LessonState;
    list: LessonState[] | null;
}
export interface LessonAddBlock {
    type: typeof LessonsActions.LESSON_ADD_BLOCK;
    payload: {
        type: LessonBlockType;
    };
}
export interface LessonRemoveBlock {
    type: typeof LessonsActions.LESSON_REMOVE_BLOCK;
    payload: {
        idx: number;
    };
}
export interface LessonUpdateBlock {
    type: typeof LessonsActions.LESSON_UPDATE_BLOCK;
    payload: {
        idx: number;
        data: Partial<LessonBlockDataState>;
    };
}
export interface LessonMoveBlock {
    type: typeof LessonsActions.LESSON_MOVE_BLOCK;
    payload: {
        idx: number;
        position: LessonBlockMovePosition;
    };
}
export interface LessonReset {
    type: typeof LessonsActions.LESSON_RESET;
}
export declare type LessonActionsType = LessonAddBlock | LessonRemoveBlock | LessonUpdateBlock | LessonMoveBlock | LessonReset;
//# sourceMappingURL=types.d.ts.map