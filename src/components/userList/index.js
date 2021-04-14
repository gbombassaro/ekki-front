import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';
import User from '../user';
import Box from '../box';

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
      <h3>{title}</h3>
      <Box width='100%'>
        {map(data, entry => (
          <User
            key={entry._id}
            primaryInformation={entry[primaryInformation]}
            secondaryInformation={entry[secondaryInformation]}
            onClick={altId => onClick({entry, altId})}
          />
        ))}
      </Box>
    </Box>
  )
}

UserList.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  primaryButtonAction: PropTypes.func,
  secondaryButtonAction: PropTypes.func,
  title: PropTypes.string,
}

export default UserList;