import PropTypes from 'prop-types';
import styled from 'styled-components';

import arrowForwardIcon from '../../assets/arrow-forward.svg';
import {ButtonTypo} from '../typography';

const Button = styled.button`
  width: max-content;
  height: 45px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.secondary};
  background-color: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 16px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px ${props => props.theme.colors.secondary};
  }
  &:focus{ 
    box-shadow: 0 0 0 1px ${props => props.theme.colors.secondary};
    outline: unset;
  }
  &:active {
    box-shadow: unset;
  }
  &:disabled {
    box-shadow: unset;
    border-color: rgba(16, 16, 16, 0.3);
    cursor: initial;
  }
  .forward-icon {
    margin-left: 12px;
  }
`;

const Component = props => {
  return (
    <Button {...props}>
      <ButtonTypo>{props.children}</ButtonTypo>
      {props.hasIcon && <img src={arrowForwardIcon} className='forward-icon'/>}
    </Button>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  hasIcon: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Component;