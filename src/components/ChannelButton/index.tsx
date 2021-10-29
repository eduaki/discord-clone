import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props{
    ChannelName: string;
    selected?: string;
}

const ChannelButton: React.FC<Props> = ({ ChannelName, selected }) => {
  return(
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{ChannelName}</span>
      </div>

      <div className='icons'>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}
export default ChannelButton;