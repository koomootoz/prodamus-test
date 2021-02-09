import { createSelector, Selector } from 'reselect'
import { AppState } from "../types"
import { LessonState } from "./types"

const lessonCreateState: Selector<AppState, LessonState> = state => state.lessons.create

export const lessonCreateSelector = createSelector<AppState, LessonState, LessonState>(
  [ lessonCreateState ],
  state => state
)
