import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: ${(props) => props.theme.footerColor.dark};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 400px;
`;

const Footer = () => {
  return <Wrapper>푸터</Wrapper>;
};
export default Footer;
