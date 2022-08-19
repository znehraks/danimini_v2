import { ReactNode } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 400px;
`;

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};
export default MainLayout;
