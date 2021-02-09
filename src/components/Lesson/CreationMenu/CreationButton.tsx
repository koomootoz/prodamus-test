import React, {FunctionComponent} from "react"
import {Button, Tooltip} from "antd"

export interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  title: string,
  icon: JSX.Element,
}

const CreationButton: FunctionComponent<Props> = ({ onClick, title, icon}) => {
  return (
    <Tooltip
      placement="top"
      title={title}
    >
      <Button
        onClick={onClick}
        block={true}
        type="link"
        size="large"
        icon={icon}
      />
  </Tooltip>
  )
}

export default CreationButton
