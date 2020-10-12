import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ minHeight: '100vh' }}>
          {children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
