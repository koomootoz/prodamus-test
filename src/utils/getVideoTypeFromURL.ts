import {LessonBlockVideoType} from "../reducers/lessons/types"

export default function getVideoTypeFromURL(url: string): LessonBlockVideoType {
  if (/youtu/.test(url)) {
    return LessonBlockVideoType.YOUTUBE
  } else {
    return LessonBlockVideoType.UNKNOWN
  }
}
