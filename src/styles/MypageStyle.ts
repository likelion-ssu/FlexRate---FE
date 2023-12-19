import { EditIcon } from '@/assets/svgs/0_index';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  gap: 3rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Title = styled.p`
  color: var(--Black, #262626);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  display: flex;
  gap: 1rem;
  & > span:nth-child(1) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const 계정정보 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #4d9a75;
`;
export const ColumnBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  list-style: none;
  padding: 0;
`;
export const Column = styled.li`
  display: flex;

  & > p {
    width: 11rem;
  }

  & > span {
    min-width: 11rem;
  }
`;
export const 신용평가정보 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledSVG = styled(EditIcon)`
  fill: #a6a6a6;
  &:hover {
    fill: #4d9a75;
    cursor: pointer;
  }
`;
