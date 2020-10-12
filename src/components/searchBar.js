import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Searchbar({ onSearch }) {
  return (
    <Paper component="form" style={{ display: 'flex', marginTop: 16 }}>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="поиск"
        style={{ flex: '1' }}
        onChange={(e) => onSearch(e.target.value)}
      />
    </Paper>
  );
}
