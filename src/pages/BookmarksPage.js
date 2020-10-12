import React from 'react';
import { useSelector } from 'react-redux';
import CardList from '../components/cardList';

export default function BookmarksPage() {
  const bookmarks = useSelector((state) => state.bookmarks);

  return (
    <div>
      <h1>Мои закладки</h1>
      {bookmarks.length ? (
        <CardList items={bookmarks} />
      ) : (
        'У вас пока нет закладок'
      )}
    </div>
  );
}
