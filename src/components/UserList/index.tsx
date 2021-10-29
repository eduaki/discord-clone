import React from "react";

import { Container, Role, User, Avatar } from './styles'


interface UserProps{
  nickname: string;
  isBot?: boolean;
}


const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {

  return(
    <User>

    <Avatar className={isBot ? 'bot' : ''}/>

    <strong>{nickname}</strong>

    {isBot && <span>Bot</span>}

  </User>
  )
}

const UserList: React.FC = () => {
  return(
    <Container>
      <Role>disponivel - 1</Role>
      <UserRow nickname='eduaki' />

      <Role>offline - 72</Role>
      <UserRow nickname='rogerinho gameplays' isBot />

      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      
    </Container>
  )
}
export default UserList;