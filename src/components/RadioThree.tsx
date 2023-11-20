import styled from 'styled-components';

interface radiothreeprops {
  prop1: string;
  prop2: string;
  prop3: string;
  commonname: string;
  onRadioChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 22px;
  & > label {
    width: 100%;
    & > input {
      display: none;
    }
    input[type='radio'] + span {
      display: flex;
      width: 100%;
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

      &:hover {
        cursor: pointer;
      }
    }

    input:checked + span {
      border-radius: 7px;
      background: var(--Alpha_Primary_2, #e3f5ee);
      border: 1.5px solid var(--Gray3, #e3f5ee);
      color: var(--Primary_Pressed_1, #4d9a75);
    }
  }
`;

const RadioThree = (props: radiothreeprops) => {
  const { prop1, prop2, prop3, commonname, onRadioChange } = props;
  // 라디오 버튼의 변경을 핸들링하는 함수
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRadioChange(event);
  };
  return (
    <Wrapper>
      <label>
        <input
          type="radio"
          name={commonname}
          value={1}
          onChange={handleRadioChange}
        ></input>
        <span>{prop1}</span>
      </label>
      <label>
        <input
          type="radio"
          name={commonname}
          value={2}
          onChange={handleRadioChange}
        ></input>
        <span>{prop2}</span>
      </label>
      <label>
        <input
          type="radio"
          name={commonname}
          value={3}
          onChange={handleRadioChange}
        ></input>
        <span>{prop3}</span>
      </label>
    </Wrapper>
  );
};

export default RadioThree;
