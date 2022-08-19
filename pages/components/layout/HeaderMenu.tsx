import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { activatedMenuAtom } from '../../../store/home';

const MenuWrapper = styled.div<{ activated: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: antiquewhite;
`;

const MenuContainer = styled.div`
  width: 200px;
  height: 80px;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HiddenContainer = styled.div<{ activated: boolean }>`
  background-color: azure;
  display: ${(props) => (props.activated ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  top: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HiddenContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;
type HeaderMenuProps = {
  menus: string[];
};
const HeaderMenu = ({ menus }: HeaderMenuProps) => {
  const [activatedMenu, setActivatedMenu] = useRecoilState(activatedMenuAtom);
  return (
    <>
      {menus.map((menu, idx) => (
        <MenuWrapper
          activated={activatedMenu === idx}
          onMouseEnter={() => {
            setActivatedMenu((prev) => {
              if (prev === -1) {
                return idx;
              }
              return prev;
            });
          }}
          onMouseLeave={() => {
            setActivatedMenu(-1);
          }}
        >
          <MenuContainer>{menu}</MenuContainer>
          <HiddenContainer activated={activatedMenu === idx}>
            <HiddenContainerItem>{idx}-1</HiddenContainerItem>
            <HiddenContainerItem>{idx}-2</HiddenContainerItem>
            <HiddenContainerItem>{idx}-3</HiddenContainerItem>
          </HiddenContainer>
        </MenuWrapper>
      ))}
    </>
  );
};
export default HeaderMenu;
