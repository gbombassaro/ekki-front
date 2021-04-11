import React from 'react';
import Section from '../components/section';

const SelectUser = props => {
  const {data} = props;
  return (
    <Section 
      width='calc(100vw - 48px)'
      height='calc(100vh - 48px)'
      padding={24}
      alignItems={['flex-start', 'center']}
      justifyContent={['flex-start', 'center']}
      bg='primary'
      color='secondary'
    >
      testando
    </Section>
  )
}

export default SelectUser;