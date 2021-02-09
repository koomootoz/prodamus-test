import { LessonAddBlock, LessonBlockDataState, LessonBlockMovePosition, LessonBlockType, LessonMoveBlock, LessonRemoveBlock, LessonReset, LessonUpdateBlock } from "./types";
export declare function lessonAddBlock(type: LessonBlockType): LessonAddBlock;
export declare function lessonRemoveBlock(idx: number): LessonRemoveBlock;
export declare function lessonUpdateBlock(idx: number, data: Partial<LessonBlockDataState>): LessonUpdateBlock;
export declare function lessonMoveBlock(idx: number, position: LessonBlockMovePosition): LessonMoveBlock;
export declare function lessonReset(): LessonReset;
//# sourceMappingURL=actions.d.ts.map