import styled from 'styled-components';
import {ArrowForward} from '@material-ui/icons';
import PropTypes from 'prop-types';

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
    box-shadow: 0 0 0 1px black;
  }
  &:focus{ 
    box-shadow: 0 0 0 1px black;
    outline: unset;
  }
  &:active {
    box-shadow: unset;
  }
  .forward-icon {
    margin-left: 12px;
  }
`
const Component = props => {
  return (
    <Button {...props}>
      {props.children}
      {props.hasIcon && <ArrowForward className='forward-icon'/>}
    </Button>
  )
}

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  hasIcon: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Component;