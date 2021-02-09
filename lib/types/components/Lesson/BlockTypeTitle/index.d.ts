import { FunctionComponent } from "react";
import { LessonBlockTitle } from "../../../reducers/lessons/types";
export interface Props extends LessonBlockTitle {
    onChange: (data: LessonBlockTitle) => void;
}
declare const BlockTypeTitle: FunctionComponent<Props>;
export default BlockTypeTitle;
//# sourceMappingURL=index.d.ts.map