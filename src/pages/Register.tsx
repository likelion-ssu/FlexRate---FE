import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }

  & > p {
    color: var(--Black, #262626);
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  & > ul {
    list-style-type: none;
    padding: 0px;
  }
`;

const Register = () => {
  return (
    <Wrapper>
      <SignupBox>
        <div className="logo">로고</div>
        <p>회원가입</p>
        <ul>
          <li>아이디</li>
          <li>비밀번호</li>
          <li>비밀번호 확인</li>
          <li>이름</li>
          <li>생년월일</li>
          <li>성별</li>
          <li>휴</li>
          <li>이멜</li>
          <li>주소</li>
        </ul>
        <div>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </SignupBox>
    </Wrapper>
  );
};

export default Register;
