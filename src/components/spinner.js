import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CircularUnderLoad() {
  return (
    <CircularProgress
      style={{ width: '100%', display: 'flex', margin: '32px 0' }}
      disableShrink
    />
  );
}
