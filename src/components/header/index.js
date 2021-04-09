import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 64px);
  height: calc(25vh - 64px);
  padding: 32px;
  h1 {
    font-size: 120px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const Header = ({children, title}) => {
  return (
    <Section height='25vh'>
      <h1>{title}</h1>
      {children}
    </Section>
  )
}