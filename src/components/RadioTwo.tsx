import styled, { css } from 'styled-components';

interface radiotwoprops {
  prop1: string;
  prop2: string;
  commonname: string;
  onChange?: (selectedValue: string) => void;
  disabled?: boolean;
}

export const Wrapper = styled.div`
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

  //아래에서 회색처리하는게 안되서 일단 전체에 적용함
  ${({ disable }) =>
    disable &&
    css`
      background-color: #f1f1f1;
      color: #bfbfbf;
    `}
`;

const RadioTwo = (props: radiotwoprops) => {
  const { prop1, prop2, commonname, onChange, disabled = false } = props;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue); // 선택된 값 알림
  };

  return (
    <Wrapper disable={disabled}>
      <label>
        <input
          type="radio"
          name={commonname}
          value={prop1}
          onChange={handleRadioChange}
          disabled={disabled}
        ></input>
        <span>{prop1}</span>
      </label>
      <label>
        <input
          type="radio"
          name={commonname}
          value={prop2}
          onChange={handleRadioChange}
          disabled={disabled}
        ></input>
        <span>{prop2}</span>
      </label>
    </Wrapper>
  );
};

export default RadioTwo;
