import { FunctionComponent } from "react";
import { LessonBlockDescription } from "../../../reducers/lessons/types";
export interface Props extends LessonBlockDescription {
    onChange: (data: LessonBlockDescription) => void;
}
declare const BlockTypeDescription: FunctionComponent<Props>;
export default BlockTypeDescription;
//# sourceMappingURL=index.d.ts.map