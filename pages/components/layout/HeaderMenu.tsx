import { useRouter } from 'next/router';
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
`;

const MenuContainer = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const HiddenContainer = styled.div<{ activated: boolean }>`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.activated ? 'flex' : 'none')};
  position: absolute;
  width: 100%;
  top: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: ${(props) => props.theme.fontColor.dark};
`;
const HiddenContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.5);
  :last-child {
    border: none;
  }
`;
type HeaderMenuProps = {
  menus: { text: string; url: string }[];
  subMenus: { text: string; url: string }[][];
};
const HeaderMenu = ({ menus, subMenus }: HeaderMenuProps) => {
  const router = useRouter();
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
          <MenuContainer
            tabIndex={0}
            onKeyPress={() => router.push(menu.url)}
            onClick={() => {
              router.push(menu.url);
            }}
          >
            {menu.text}
          </MenuContainer>
          <HiddenContainer activated={activatedMenu === idx}>
            {subMenus[idx].map((subMenu) => (
              <HiddenContainerItem
                tabIndex={0}
                onKeyPress={() => router.push(subMenu.url)}
                onClick={() => {
                  router.push(subMenu.url);
                }}
                key={subMenu.text}
              >
                {subMenu.text}
              </HiddenContainerItem>
            ))}
          </HiddenContainer>
        </MenuWrapper>
      ))}
    </>
  );
};
export default HeaderMenu;
