import { FunctionComponent } from "react";
import { LessonBlockAudio } from "../../../reducers/lessons/types";
export interface Props extends LessonBlockAudio {
    onChange: (data: LessonBlockAudio) => void;
}
declare const BlockTypeAudio: FunctionComponent<Props>;
export default BlockTypeAudio;
//# sourceMappingURL=index.d.ts.map