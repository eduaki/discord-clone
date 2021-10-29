import React from "react";

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon } from './styles'

const UserInfo: React.FC = () => {
  return(
    <Container>

      <Profile>
        <Avatar />
        <UserData>
          <strong>eduaki</strong>
          <span>#2483</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadPhoneIcon />
        <SettingsIcon />
      </Icons>

    </Container>
  )
}
export default UserInfo;