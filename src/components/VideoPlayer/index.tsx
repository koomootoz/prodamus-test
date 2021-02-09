import React, {FunctionComponent} from "react"
import YouTube from 'react-youtube'
import {LessonBlockVideo, LessonBlockVideoType} from "../../reducers/lessons/types";
import {Alert} from 'antd'

export interface Props extends LessonBlockVideo {
  width?: number
}

const VideoPlayer: FunctionComponent<Props> = ({ type, id, width }) => {
  switch (type) {
    case LessonBlockVideoType.YOUTUBE:
      return (
        <YouTube
          videoId={id}
          opts={{
            height: `${width! / 16 * 9}`,
            width: `${width}`,
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }}
        />
      )

    default:
      return (
        <Alert message="Unsupported player" type="error" />
      )
  }
}

VideoPlayer.defaultProps = {
  width: 460,
}

export default VideoPlayer
