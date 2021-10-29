import React from "react";

import { Container, Category, AddCategoryIcon } from './styles'

import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton ChannelName='chat livre'/>
      <ChannelButton ChannelName='trabalho'/>
      <ChannelButton ChannelName='minezinho'/>
      <ChannelButton ChannelName='cs'/>
      <ChannelButton ChannelName='stardew valey'/>
    </Container>
  )
}
export default ChannelList;