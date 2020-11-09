import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos, getNextPage } from '../servicies/youtube';
import { fetchTrends, updatetrendsAction } from '../actions/trendsActions';

import Button from '@material-ui/core/Button';

import SearchBar from '../components/searchBar';
import CardList from '../components/cardList';
import Spinner from '../components/spinner';

export default function SearchPage(state) {
  const dispatch = useDispatch();
  const [filtred, setFiltred] = useState([]);
  const [loading, setloading] = useState(false);

  const trends = useSelector((state) => state.trends);

  useEffect(() => {
    if (!trends.isBisy && trends.payload !== null && trends.error === null) {
      setFiltred(trends.payload.items);
    }
  }, [trends.error, trends.isBisy, trends.payload]);

  const searchHandler = (query) => {
    dispatch(fetchTrends(() => getVideos(query)));
  };

  const loadMoreHandler = async () => {
    setloading(true);
    const data = await getNextPage(trends.payload.nextPage);
    dispatch(updatetrendsAction(data));
    setloading(false);
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
            {loading ? (
              <Spinner />
            ) : (
              trends.payload && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={loadMoreHandler}
                >
                  Загрузить еще...
                </Button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
