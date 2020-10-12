import React from 'react';
import Card from './card';
import { useSelector } from 'react-redux';

export default function CardList({ items }) {
  const bookmarks = useSelector((state) => state.bookmarks);

  const checked = items.map((item) => ({
    item,
    booked: bookmarks.find((b) => b.id === item.id) ? true : false,
  }));

  return (
    <div>
      {checked.map((card) => (
        <Card key={card.item.id} data={card.item} isSaved={card.booked} />
      ))}
    </div>
  );
}
