import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`;

const GridItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridItemContent = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

const boxAnimation: Variants = {
  start: {
    opacity: 0,
    scale: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const gridItemVariants: Variants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
  },
  hover: {
    border: '5px solid #000',
    fontWeight: 800,
    fontSize: 24,
    scale: 1.1,
    boxShadow: '3px 3px rgba(0,0,0,0.3)',
  },
};
const HomeComponent = () => {
  const router = useRouter();
  const movePage = useCallback(
    (url: string) => {
      router.push(url);
    },
    [router],
  );
  return (
    <Wrapper variants={boxAnimation} initial='start' animate='end'>
      <GridItem>
        <GridItemContent
          variants={gridItemVariants}
          whileHover='hover'
          onClick={() => movePage('/goal')}
          role='button'
          onKeyPress={() => movePage('/goal')}
          tabIndex={0}
        >
          <span>내 목표 관리</span>
        </GridItemContent>
      </GridItem>{' '}
      <GridItem>
        <GridItemContent
          variants={gridItemVariants}
          whileHover='hover'
          onClick={() => movePage('/goal')}
          role='button'
          onKeyPress={() => movePage('/goal')}
          tabIndex={0}
        >
          <span>내 점수 현황</span>
        </GridItemContent>
      </GridItem>{' '}
      <GridItem>
        <GridItemContent
          variants={gridItemVariants}
          whileHover='hover'
          onClick={() => movePage('/mypage')}
          role='button'
          onKeyPress={() => movePage('/mypage')}
          tabIndex={0}
        >
          <span>내 정보 관리</span>
        </GridItemContent>
      </GridItem>{' '}
      <GridItem>
        <GridItemContent
          variants={gridItemVariants}
          whileHover='hover'
          onClick={() => movePage('/ranking')}
          role='button'
          onKeyPress={() => movePage('/ranking')}
          tabIndex={0}
        >
          <span>내 순위는?</span>
        </GridItemContent>
      </GridItem>
    </Wrapper>
  );
};
export default HomeComponent;
