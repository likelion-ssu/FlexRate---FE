import styled, { css } from 'styled-components';

const TooltipText = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: baseline; */
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
`;

const PointColorText = styled.span`
  background: linear-gradient(
    90deg,
    #05f6a7 0%,
    #35a9ea 25.01%,
    #40a0ff 48.39%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TooltipFooter = styled.div`
  display: flex;
  justify-content: space-between;

  & > .stageStatus {
    color: var(--Gray5, #a6a6a6);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
  }

  & > button {
    width: 40px;
    height: 20px;
    border-radius: 5px;
    background-color: #529ef7;
    border: none;
    color: #fff;
    font-family: Pretendard;
    font-size: 10px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      opacity: 90%;
    }
  }
`;

export { TooltipFooter, TooltipText, PointColorText };
