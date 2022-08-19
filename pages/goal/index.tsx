import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
`;

const Article = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
`;

const ArticleTitle = styled.span`
  font-size: 28px;
  font-weight: 500;
  color: #e5e5e5;
`;

const ArticleContent = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const ArticleCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ArticleCard = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.4);
  color: #e5e5e5;
`;

const GoalPage = () => {
  return (
    <Wrapper>
      <Article>
        <ArticleTitle>이번주 목표</ArticleTitle>
        <ArticleContent>
          <ArticleCardWrapper>
            <ArticleCard>목표1</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표2</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표3</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표4</ArticleCard>
          </ArticleCardWrapper>
        </ArticleContent>
      </Article>
      <Article>
        <ArticleTitle>달성된 목표</ArticleTitle>
        <ArticleContent>
          <ArticleCardWrapper>
            <ArticleCard>목표1</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표2</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표3</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표4</ArticleCard>
          </ArticleCardWrapper>
        </ArticleContent>
      </Article>
      <Article>
        <ArticleTitle>미달성된 목표</ArticleTitle>
        <ArticleContent>
          <ArticleCardWrapper>
            <ArticleCard>목표1</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표2</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표3</ArticleCard>
          </ArticleCardWrapper>
          <ArticleCardWrapper>
            <ArticleCard>목표4</ArticleCard>
          </ArticleCardWrapper>
        </ArticleContent>
      </Article>
    </Wrapper>
  );
};

export default GoalPage;
