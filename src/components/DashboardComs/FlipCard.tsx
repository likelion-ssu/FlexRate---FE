import React, { useState } from 'react';
import styled from 'styled-components';
import flip1 from '@/assets/imgs/Flip1.png';

const CardContainer = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const CardFlipper = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;

const CardFront = styled(CardFace)`
  background-color: #007bff;
`;

const CardBack = styled(CardFace)`
  background-color: #e8f7f7;
  background-image: url(${flip1});
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotateY(180deg);
`;

const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer onClick={handleClick} isFlipped={isFlipped}>
      <CardFlipper isFlipped={isFlipped}>
        <CardFront>Front Side</CardFront>
        <CardBack>Back Side</CardBack>
      </CardFlipper>
    </CardContainer>
  );
};

export default FlipCard;
