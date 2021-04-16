import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

import Box from '../box';
import Button from '../button';
import Section from '../section';
import {ExclusiveTitle} from '../typography';

const Header = ({actionButtons, isHome, title}) => {

  const containerHeightXs = isHome ? 'calc(100vh - 64px)' : 'max-content';
  const containerHeightMd = isHome ? 'calc(25vh - 64px)' : 'max-content';

  return (
    <Section
      height={[containerHeightXs, containerHeightMd]}
      flexDirection={['column', 'row']}
      alignItems={['flex-start', 'center']}
      justifyContent='space-between'
      padding='32px'
    >
      <Box height='max-content'>
        <ExclusiveTitle fontSize={['30px', '50px']}>{title}</ExclusiveTitle>
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
  );
};

Header.propTypes = {
  actionButtons: PropTypes.array,
  title: PropTypes.string,
};

export default Header;