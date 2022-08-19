import React from 'react';
import styled from 'styled-components';

import LogoImg from '../../../public/logo.jpg';

import HeaderMenu from './HeaderMenu';

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: ${(props) => props.theme.headerColor.dark};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 300px;
`;

const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 80%;
  }
`;
const menus = ['메뉴1', '메뉴2', '메뉴3', '메뉴4'];

const Header = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <img src={LogoImg.src} alt='로고 이미지' />
      </LogoContainer>
      <HeaderMenu menus={menus} />
    </Wrapper>
  );
};
export default Header;
