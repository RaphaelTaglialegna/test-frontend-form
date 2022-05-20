import React, { FC } from 'react'
import { HeaderContainer } from './style'
const LogoAgrotis = require('../../images/logoAgrotis.png');

type Props = {}

export const Header: FC<Props> = (_props) => {
  return (
    <HeaderContainer>
      <img src={LogoAgrotis} alt="Logo" width="130" />
    </HeaderContainer>
  )
}
