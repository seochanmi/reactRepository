//src/App02.js   App2가 이미 만들어져있음

import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import { Alert, Container } from 'react-bootstrap';

function App02(props) {
    return (
       <Container>
            <h3>react bootstrap 활용</h3>
            <AlertSample/>
       </Container>
    );
}

function AlertSample() {
    return (
      <>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </>
    );
  }
  

export default App02;