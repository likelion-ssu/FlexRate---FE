import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 166px;
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
        cursor: pointer;
      }

      .notequal {
        position: absolute;
        bottom: -25px;
        font-size: 16px;
        margin: 0px;
        color: #ef4a3e;
      }

      & > label {
        color: #262626;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
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
      & > Link {
        //나중에 Link로 바꿔줄거임
        color: var(--Primary, #63c393);
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration-line: underline;
      }

      /* & > button {
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
      } */
    }
    .btn {
      width: 97px;
    }
  }
`;
