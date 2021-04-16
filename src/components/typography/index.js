import {get} from 'lodash';
import {typography} from 'styled-system';
import styled from 'styled-components';

const getColor = props => {
  const value = get(props, 'color', '');
  const theme = get(props, 'theme.colors', {});
  const selected = theme[value];
  if (selected) return selected;
  return theme.secondary;
}

export const ExclusiveTitle = styled.h1`
  color: ${getColor};
  ${typography};
`
export const LargeTitle = styled.h2`
  color: ${getColor};
  ${typography};
`
export const MediumTitle = styled.h3`
  color: ${getColor};
  ${typography};
`
export const SmallTitle = styled.h4`
  color: ${getColor};
  ${typography};
`
export const Label = styled.label`
  color: ${getColor};
  ${typography};
  margin-bottom: 8px;
`
export const ButtonTypo = styled.span`
  color: ${getColor};
  ${typography};
`
export const Text = styled.p`
  color: ${getColor};
  ${typography};
`