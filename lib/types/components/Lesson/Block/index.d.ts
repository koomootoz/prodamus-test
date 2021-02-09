import { FunctionComponent } from "react";
import { LessonBlockDataState, LessonBlockState, LessonBlockType } from "../../../reducers/lessons/types";
export interface BlockProps extends LessonBlockState {
    idx: number;
    addBlock: (type: LessonBlockType) => void;
    updateBlock: (idx: number, data: Partial<LessonBlockDataState>) => void;
}
declare const Block: FunctionComponent<BlockProps>;
export default Block;
//# sourceMappingURL=index.d.ts.map