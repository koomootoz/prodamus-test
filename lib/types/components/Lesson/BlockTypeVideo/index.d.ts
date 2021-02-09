import { FunctionComponent } from "react";
import { LessonBlockVideo } from "../../../reducers/lessons/types";
export interface Props extends LessonBlockVideo {
    onChange: (data: LessonBlockVideo) => void;
}
declare const BlockTypeVideo: FunctionComponent<Props>;
export default BlockTypeVideo;
//# sourceMappingURL=index.d.ts.map