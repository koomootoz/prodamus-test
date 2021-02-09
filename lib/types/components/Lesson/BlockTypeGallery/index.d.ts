import { FunctionComponent } from "react";
import { LessonBlockGallery } from "../../../reducers/lessons/types";
export interface Props extends LessonBlockGallery {
    onChange: (data: LessonBlockGallery) => void;
}
declare const BlockTypeGallery: FunctionComponent<Props>;
export default BlockTypeGallery;
//# sourceMappingURL=index.d.ts.map