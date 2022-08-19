import { useRouter } from 'next/router';
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
  padding: 0 400px;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 80%;
  }
`;
const menus = [
  { text: 'GOAL', url: '/goal' },
  { text: 'RANKING', url: '/ranking' },
  { text: 'MYPAGE', url: '/mypage' },
  { text: 'EXPERIMENTAL', url: '/experimental' },
];
const subMenus = [
  [{ text: '내 목표 보기', url: '/goal' }],
  [
    { text: '실시간랭킹', url: '/ranking/realtime' },
    { text: '종합랭킹', url: '/ranking/total' },
  ],
  [
    { text: '내 점수 보기', url: '/score/my' },
    { text: '내 정보 수정', url: '/mypage' },
  ],
  [{ text: '실험실 기능', url: '/experimental' }],
];
const Header = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <LogoContainer
        onClick={() => {
          router.push('/');
        }}
      >
        <img src={LogoImg.src} alt='로고 이미지' />
      </LogoContainer>
      <HeaderMenu menus={menus} subMenus={subMenus} />
    </Wrapper>
  );
};
export default Header;
