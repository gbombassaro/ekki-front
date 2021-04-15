import {debounce} from 'lodash';
import React from 'react';
import styled from 'styled-components';

import closeIcon from '../../assets/close.svg';

const Body = styled.div`
  position: absolute;
  left: calc(50vw - 225px - 48px);
  bottom: 24px;
  width: 450px;
  height: calc(150px - 48px);
  padding: 24px;
  background-color: black;
  svg {
    cursor: pointer;
    fill: white;
  }
`;
const Message = styled.p`
  font-size: 16px;
  color: white;
`;

const Notification = ({data, dispatch}) => {
  const {show, message} = data;
  if (!show) return null;

  const close = () => {
    dispatch({type: 'NOTIFICATION/CLOSE'});
  };

  const autoCloseNotification = debounce(close, 4000);
  autoCloseNotification();

  return (
    <Body>
      <img src={closeIcon} onClick={close} />
      <Message>{message}</Message>
    </Body>
  );
};

export default Notification;