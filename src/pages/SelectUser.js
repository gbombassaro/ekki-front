import React from 'react';
import Section from '../components/section';
import User from '../components/user';
import {map} from 'lodash';

const SelectUser = props => {
  const {data} = props;
  return (
    <Section 
      width='calc(100vw - 48px)'
      height='calc(100vh - 48px)'
      padding={24}
      flexDirection='column'
      alignItems={['flex-start', 'center']}
      justifyContent={['flex-start', 'center']}
      color='secondary'
    >
      {/* Todo: revisar segurança de passar o account id para o key */}
      {map(data, user => <User key={data.id} data={user} /> )}
    </Section>
  )
}

export default SelectUser;