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
