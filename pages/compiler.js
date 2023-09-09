import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { MyContext } from '../utils/MyContext';
import MainLayout from '../layouts/MainLayout';
import CompilerLanding from '../components/CompilerLanding';

const compiler = () => {
  return (
    <MainLayout>
      <Container>
        <CompilerLanding/>
      </Container>
    </MainLayout>
  );
};

const Container = styled.div``;

export default compiler;
