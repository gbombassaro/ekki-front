import React from 'react';
import Box from '../box';
import Button from '../button';
import {map} from 'lodash';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Section from '../section';

const Header = ({actionButtons, isHome, title}) => {

  const containerHeightXs = isHome ? '100vh' : '20vh';

  return (
    <Section
      height={[containerHeightXs, '20vh']}
      flexDirection={['column', 'row']}
      alignItems={['flex-start', 'center']}
      justifyContent='space-between'
    >
      <Box height='max-content'>
        <h1>{title}</h1>
      </Box>
      <Box flexDirection='column' alignItems={['flex-start', 'flex-end']}>
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