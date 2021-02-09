import { FunctionComponent } from "react";
import { LessonBlockFile } from "../../../reducers/lessons/types";
export interface Props extends LessonBlockFile {
    onChange: (data: LessonBlockFile) => void;
}
declare const BlockTypeFile: FunctionComponent<Props>;
export default BlockTypeFile;
//# sourceMappingURL=index.d.ts.map