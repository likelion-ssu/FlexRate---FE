import React from 'react';
import NotificationImg from '../../assets/imgs/notification.png';
import { styled } from 'styled-components';

const Notification = () => {
  return (
    <Dash.Wrapper>
      <img src={NotificationImg} />
    </Dash.Wrapper>
  );
};

const Dash = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid var(--Gray3, #d9d9d9);
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > img {
      width: 100%;
      object-fit: fill;
    }
  `,
};

export default Notification;
