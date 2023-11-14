import styled, { css } from 'styled-components';

interface radiotwoprops {
  prop1: string;
  prop2: string;
  commonname: string;
  // onChange?: (selectedValue: string) => void;
  disabled?: boolean;
  onRadioChange: (value: React.ChangeEvent<HTMLInputElement>) => void; //부모에 선택된 input 태그를 event 째로 넘겨줌
}

const Form = styled.form`
  display: flex;
  gap: 10px;
  & > label {
    width: 130px;
  }
`;
const RadioInput = styled.input<{ disabled?: boolean }>`
  display: none;

  // input이 비활성화 상태일 때 span에 적용할 스타일
  + span {
    background-color: ${({ disabled }) => (disabled ? '#f1f1f1' : 'initial')};
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

  // input이 선택됐을 때 span에 적용할 스타일
  &:checked + span {
    border-radius: 7px;
    background: var(--Alpha_Primary_2, #e3f5ee);
    border: 1.5px solid var(--Gray3, #e3f5ee);
    color: var(--Primary_Pressed_1, #4d9a75);
  }
`;

/* //아래에서 회색처리하는게 안되서 일단 전체에 적용함
  ${({ disable }) =>
    disable &&
    css`
      background-color: #f1f1f1;
      color: #bfbfbf;
    `} */

const RadioTwo = (props: radiotwoprops) => {
  const { prop1, prop2, commonname, onRadioChange, disabled = false } = props;

  // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedValue = event.target.value;
  //   onChange(selectedValue); // 선택된 값 알림
  // };

  // const { prop1, prop2, commonname, onRadioChange } = props;

  // 라디오 버튼의 변경을 핸들링하는 함수
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRadioChange(event);
  };
  return (
    <Form>
      <label>
        <RadioInput
          type="radio"
          name={commonname}
          value="true"
          onChange={handleRadioChange}
          disabled={disabled}
        ></RadioInput>
        <span>{prop1}</span>
      </label>
      <label>
        <RadioInput
          type="radio"
          name={commonname}
          value="false"
          onChange={handleRadioChange}
          disabled={disabled}
        ></RadioInput>
        <span>{prop2}</span>
      </label>
    </Form>
  );
};

export default RadioTwo;
