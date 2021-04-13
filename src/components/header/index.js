import React from 'react';
import styled from 'styled-components';
import Box from '../box';
import Button from '../button';
import {map} from 'lodash';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 64px);
  height: calc(25vh - 64px);
  padding: 32px;
  h1 {
    font-size: 80px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

const Header = ({actionButtons, title}) => {
  return (
    <Section height='25vh'>
      <h1>{title}</h1>
      <Box flexDirection='column'>
        {map(actionButtons, button => (
          <Box key={button.id} marginTop={1} marginBottom={1} justifyContent='flex-end'>
            <Link to={button.link}>
              <Button {...button} />
            </Link>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

Header.propTypes = {
  actionButtons: PropTypes.array,
  title: PropTypes.string,
}

export default Header;