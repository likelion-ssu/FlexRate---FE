import styled from 'styled-components';

interface radiotwoprops {
  prop1: string;
  prop2: string;
  commonname: string;
  onRadioChange: (value: React.ChangeEvent<HTMLInputElement>) => void; //부모에 선택된 input 태그를 event 째로 넘겨줌
}

const Form = styled.form`
  display: flex;
  gap: 10px;
  & > label {
    width: 130px;
    & > input {
      display: none;
    }
    input + span {
      display: flex;
      width: 130px;
      padding: 18px 0;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 7px;
      border: 1.5px solid var(--Gray3, #d9d9d9);
      color: var(--Gray4, #bfbfbf);
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    input:checked + span {
      border-radius: 7px;
      background: var(--Alpha_Primary_2, #e3f5ee);
      border: 1.5px solid var(--Gray3, #e3f5ee);
      color: var(--Primary_Pressed_1, #4d9a75);
    }
  }
`;

const RadioTwo = (props: radiotwoprops) => {
  const { prop1, prop2, commonname, onRadioChange } = props;

  // 라디오 버튼의 변경을 핸들링하는 함수
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRadioChange(event);
  };
  return (
    <Form>
      <label>
        <input
          type="radio"
          name={commonname}
          value="false" //0
          onChange={handleChange}
        />
        <span>{prop1}</span>
      </label>
      <label>
        <input
          type="radio"
          name={commonname}
          value="true" //1
          onChange={handleChange}
        ></input>
        <span>{prop2}</span>
      </label>
    </Form>
  );
};

export default RadioTwo;
