import React, {useRef, useEffect} from "react";

import { Container, Messages, Input, InputWrapper, InputIcon } from './styles'
import ChannelMessage, {Mention} from "../ChannelMessage";

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(()=>{
    const div = messagesRef.current

    if(div){
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return(
    <Container>

      <Messages ref={messagesRef}>

        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />        <ChannelMessage
        author='eduaki'
        date='29/10/2021'
        content='hoje é sexta-feira FINALMENTE!!!!'
        />

        <ChannelMessage
        author='rogerinho gameplays'
        date='30/10/2021'
        content={
          <>
            <Mention>@eduaki</Mention> não fique espamando seu lixo ngm liga pra vc!!!
          </>
        }
        isBot
        hasMention
        />

      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='conversar em #chat-livre'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}
export default ChannelData;