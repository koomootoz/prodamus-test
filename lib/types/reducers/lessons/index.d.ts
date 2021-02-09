import { LessonActionsType, LessonBlockAudio, LessonBlockDescription, LessonBlockFile, LessonBlockGallery, LessonBlockGallerySlide, LessonBlockTitle, LessonBlockVideo, LessonBlockVideoType, LessonsState } from "./types";
export declare class LessonBlockTitleData implements LessonBlockTitle {
    text: string;
    constructor(text?: string);
}
export declare class LessonBlockDescriptionData implements LessonBlockDescription {
    text: string;
    constructor(text?: string);
}
export declare class LessonBlockVideoData implements LessonBlockVideo {
    type: LessonBlockVideoType;
    id: string;
    constructor(type?: LessonBlockVideoType, id?: string);
}
export declare class LessonBlockAudioData implements LessonBlockAudio {
    src: string;
    constructor(src?: string);
}
export declare class LessonBlockGalleryData implements LessonBlockGallery {
    slides: LessonBlockGallerySlideData[];
    constructor(slides?: LessonBlockGallerySlideData[]);
}
export declare class LessonBlockGallerySlideData implements LessonBlockGallerySlide {
    image: string;
    description: string;
    constructor(image?: string, description?: string);
}
export declare class LessonBlockFileData implements LessonBlockFile {
    name: string;
    description: string;
    constructor(name?: string, description?: string);
}
export default function lessonsReducer(state: LessonsState | undefined, action: LessonActionsType): LessonsState;
//# sourceMappingURL=index.d.ts.map