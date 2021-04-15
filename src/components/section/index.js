import PropTypes from 'prop-types';
import styled from 'styled-components';
import {color, flexbox, layout, space} from 'styled-system';

const Section = styled.section`
  display: flex;
  ${space};
  ${layout};
  ${flexbox};
  ${color};
`;

Section.propTypes = {
  alignItems: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  justifyContent: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  flexDirection: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  flexWrap: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  bg: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  color: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default Section;