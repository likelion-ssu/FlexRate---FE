import styled from 'styled-components';

export const BasicInput = styled.input`
  width: 568px;
  height: 55px;
  border-radius: 7px;
  border: 1.5px solid var(--Gray3, #d9d9d9);

  padding: 0px 28px;

  &::placeholder {
    color: var(--Gray6, #8c8c8c);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  &:focus {
    outline: 1.5px solid var(--Primary, #63c393);
    border-color: transparent;
  }
`;

/** 버튼 스타일링 컴포넌트*/
interface ButtonProps {
  width?: string;
  height?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '43px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  border: none;
  background: var(--Primary, #63c393);

  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
