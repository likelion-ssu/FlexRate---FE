import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 230px;
`;

export const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  & > .logo {
    width: 222px;
    height: 64px;
    background: var(--Gray2, #f1f1f1);
    margin-bottom: 40px;
  }

  & > p {
    color: var(--Black, #262626);
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 40px;
    margin-top: 0px;
  }
`;

export const SignupInfobox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  & > ul {
    list-style-type: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0px;

    .genderAndnationBox {
      //성별, 국적 나타내는 박스
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > span {
        display: flex;
        flex-direction: column;
        gap: 9px;
      }
    }
    & > li {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 9px;
      position: relative;

      .invisible {
        position: absolute;
        right: 23px;
        top: 46px;
      }

      & > label {
        color: #262626;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      & > .pwCheck {
        color: var(--Gray6, #909090);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const SignupBottombox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;

  & > ul {
    list-style-type: none;
    padding: 0px;

    & > li {
      color: var(--Black, #262626);
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 11px;
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      & > p {
        color: var(--Black, #262626);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      & > h4 {
        //나중에 Link로 바꿔줄거임
        color: var(--Primary, #63c393);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
      }

      & > button {
        width: 97px;
        height: 43px;
        border-radius: 7px;
        background: var(--Primary, #63c393);
        border: none;

        color: var(--White, #fff);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
`;

export const BasicInput = styled.input`
  width: 568px;
  height: 55px;
  border-radius: 7px;
  border: 1.5px solid var(--Gray3, #d9d9d9);

  padding: 0px 28px;

  &:focus {
    outline: 1.5px solid var(--Primary, #63c393);
    border: none;
  }
`;
