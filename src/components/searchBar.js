import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

export default function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    onSearch(query.trim().toLocaleLowerCase());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSearch(query.trim().toLocaleLowerCase());
    }
  };

  return (
    <Paper component="form" style={{ display: 'flex', marginTop: 16 }}>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder="поиск"
        style={{ flex: '1' }}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <Button
        onKeyPress={(e) => handleKeyPress(e)}
        onClick={(e) => searchHandler(e)}
        variant="contained"
        disableElevation
      >
        найти
      </Button>
    </Paper>
  );
}
