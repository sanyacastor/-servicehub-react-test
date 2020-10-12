import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrends, getNextPage } from '../servicies/youtube';
import { fetchTrends, updatetrendsAction } from '../actions/trendsActions';

import Button from '@material-ui/core/Button';

import SearchBar from '../components/searchBar';
import CardList from '../components/cardList';
import Spinner from '../components/spinner';

export default function SearchPage(state) {
  const dispatch = useDispatch();
  const [filtred, setFiltred] = useState([]);

  const trends = useSelector((state) => state.trends);

  useEffect(() => {
    dispatch(fetchTrends(getTrends));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!trends.isBisy && trends.payload !== null && trends.error === null) {
      setFiltred(trends.payload.items);
    }
  }, [trends.error, trends.isBisy, trends.payload]);

  const searchHandler = (query) => {
    const updated = query
      ? trends.payload.items.filter((t) =>
          t.snippet.title.toLowerCase().includes(query.toLowerCase())
        )
      : trends.payload.items;

    setFiltred(updated);
  };

  const loadMoreHandler = async () => {
    getNextPage(trends.payload.nextPage).then((data) =>
      dispatch(updatetrendsAction(data))
    );
  };

  return (
    <div>
      <SearchBar onSearch={searchHandler} />
      {trends.error && <p>Что-то пошло не так</p>}
      {trends.isBisy && !trends.error ? (
        <Spinner />
      ) : (
        <>
          <CardList items={filtred} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '16px 0',
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={loadMoreHandler}
            >
              Загрузить еще...
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
