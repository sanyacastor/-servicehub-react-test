import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardList from '../components/cardList';
import SearchBar from '../components/searchBar';
import Typography from '@material-ui/core/Typography';

export default function BookmarksPage() {
  const bookmarks = useSelector((state) => state.bookmarks);
  const [filtred, setFiltred] = useState(bookmarks);

  useEffect(() => {
    setFiltred(bookmarks);
  }, [bookmarks]);

  const searchHandler = (query) => {
    if (!query.length) {
      setFiltred(bookmarks);
    } else {
      const searchResult = bookmarks.filter((b) =>
        b.snippet.title.toLowerCase().includes(query)
      );
      setFiltred(searchResult);
    }
  };

  const message = bookmarks.length
    ? 'ничего не найдено'
    : 'у вас пока нет закладок';

  return (
    <>
      <h1>Мои закладки</h1>
      <SearchBar onSearch={searchHandler} />
      {filtred.length ? (
        <CardList items={filtred} />
      ) : (
        <Typography>{message}</Typography>
      )}
    </>
  );
}
