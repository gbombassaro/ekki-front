import {debounce} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import closeIcon from '../../assets/close.svg';
import Box from '../box';
import {Text} from '../typography';

const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: black;
  color: white;
  @media (min-width: 600px) {
    bottom: 24px;
    left: calc(50vw - 225px - 48px);
  }
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Notification = ({data, dispatch}) => {
  const {show, message} = data;
  if (!show) return null;

  const close = () => {
    dispatch({type: 'NOTIFICATION/CLOSE'});
  };

  const autoCloseNotification = debounce(close, 5000);
  autoCloseNotification();

  return (
    <AbsoluteContainer>
      <Box flexDirection='column' padding='24px' width={['calc(100vw - 48px)', '450px']} height='calc(150px - 48px)'>
        <Box justifyContent='flex-end'>
          <Image src={closeIcon} onClick={close} />
        </Box>
        <Text color='white'>{message}</Text>
      </Box>
    </AbsoluteContainer>
  );
};

Notification.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func
};

export default Notification;