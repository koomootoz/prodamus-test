import React, {FunctionComponent} from "react"
import ReactPlayer from 'react-player/lazy'

export interface Props {
  src: string,
}

const AudioPlayer: FunctionComponent<Props> = ({ src }) => {
  return (
    <ReactPlayer
      url={src}
      width="460px"
      height="50px"
      playing={false}
      controls={true}
    />
  )
}

export default AudioPlayer
