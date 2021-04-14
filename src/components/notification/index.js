import React from 'react';
import styled from 'styled-components';
import {debounce} from 'lodash';
import closeIcon from '../../assets/close.svg'

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
`
const Message = styled.p`
  font-size: 16px;
  color: white;
`

const Notification = ({data, dispatch}) => {
  const {show, message} = data;

  const close = () => dispatch({
    type: 'notification',
    show: false,
    message: ''
  });  

  if (!show) return null;

  const autoCloseNotification = debounce(close, 4000);
  autoCloseNotification();

  return (
    <Body>
      <img src={close} onClick={close} />
      <Message>{message}</Message>
    </Body>
  )
}

export default Notification;