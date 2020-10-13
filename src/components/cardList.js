import React, { useMemo } from 'react';
import Card from './card';
import { useSelector } from 'react-redux';

export default function CardList({ items }) {
  const bookmarks = useSelector((state) => state.bookmarks);

  const checked = useMemo(
    () =>
      items.map((item) => ({
        item,
        booked: bookmarks.find((b) => b.id === item.id) ? true : false,
      })),
    [bookmarks, items]
  );

  return (
    <div>
        {checked.map((card) => (
          <Card key={card.item.etag} data={card.item} isSaved={card.booked} />
        ))}
    </div>
  );
}
