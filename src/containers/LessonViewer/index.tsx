import React, {FunctionComponent, useCallback, useEffect} from "react"
import {useParams} from 'react-router-dom'
import styles from './styles.scss'
import Layout from "../../components/Layout"
import Lesson from '../../components/Lesson'
import {useDispatch, useSelector} from "react-redux";
import {lessonCreateSelector} from "../../reducers/lessons/selectors";
import {LessonBlockDataState, LessonBlockState, LessonBlockType} from "../../reducers/lessons/types";
import Block from "../../components/Lesson/Block";
import {lessonAddBlock, lessonReset, lessonUpdateBlock} from "../../reducers/lessons/actions";

const LessonViewer: FunctionComponent<{}> = () => {
  const { id } = useParams()
  const lesson = useSelector(lessonCreateSelector)

  const dispatch = useDispatch()

  const addBlock: (type: LessonBlockType) => void = useCallback((type) => dispatch(lessonAddBlock(type)), [dispatch])
  const updateBlock: (idx: number, data: Partial<LessonBlockDataState>) => void = useCallback((idx, data) => dispatch(lessonUpdateBlock(idx, data)), [dispatch])
  const resetLesson: () => void = useCallback(() => dispatch(lessonReset()), [dispatch])

  useEffect(() => {
    if (id !== void 0) {
      // load from server...
    }
    return () => resetLesson()
  }, [id, resetLesson])

  return (
    <Layout className={styles.lessonViewer}>
      {lesson.blocks.map((block: LessonBlockState, idx: number) => (
        <Block
          {...block}
          key={idx}
          idx={idx}
          addBlock={addBlock}
          updateBlock={updateBlock}
        />
      ))}
    </Layout>
  )
}

export default LessonViewer
