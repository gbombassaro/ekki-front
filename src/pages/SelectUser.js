import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Children = styled.div`
  width: 400px; 
  height: 2000px;
  background: blue;
`

const SelectUser = props => {
  const {data} = props;
  const teste = data[0];
  const string = teste && JSON.stringify(teste)
  console.log(string)
  return (
    <Section>
      <Children/>
    </Section>
  )
}

export default SelectUser;