import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Box from '../box';
import {MediumTitle} from '../typography';
import User from '../user';

const UserList = props => {

  const {
    data,
    onClick,
    primaryInformation,
    secondaryInformation,
    title
  } = props;

  return (
    <Box width='100%' flexDirection='column' maxWidth={600}>
      <MediumTitle>{title}</MediumTitle>
      <Box width='100%' flexDirection='column'>
        {map(data, entry => (
          <User
            key={entry.id}
            primaryInformation={entry[primaryInformation]}
            secondaryInformation={entry[secondaryInformation]}
            onClick={altId => onClick({entry, altId})}
          />
        ))}
      </Box>
    </Box>
  );
};

UserList.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  primaryButtonAction: PropTypes.func,
  secondaryButtonAction: PropTypes.func,
  title: PropTypes.string,
};

export default UserList;