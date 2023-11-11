import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 55px;
`;

const DropdownButton = styled.button`
  background-color: #fff;
  width: 100%;
  height: 55px;
  border-radius: 7px;
  border: 1.5px solid var(--Gray3, #d9d9d9);
  padding: 0px 28px;

  &:focus {
    outline: 1.5px solid var(--Primary, #63c393);
    border-color: transparent;
  }
`;
const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
`;

const DropdownItem = styled.div`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

interface DropdownProps {
  options: string[];
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
  ph?: string; //placeholder , 기본값을 빈 문자열로 설정
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  name,
  onChange,
  ph = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleItemClick = (name: string, item: string) => {
    onChange(name, item);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <ButtonContent>
          {value.length > 0 ? <div>{value}</div> : <div>{ph}</div>}
          <FontAwesomeIcon icon={faChevronDown} />
        </ButtonContent>
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map((item) => (
            <DropdownItem
              key={item}
              onClick={() => handleItemClick(name, item)}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
