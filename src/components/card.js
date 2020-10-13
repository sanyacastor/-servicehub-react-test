import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import {
  createBookmarkAction,
  deleteBookmarkAction,
} from '../actions/bookmarksActions';

const MyCard = ({ data, isSaved }) => {
  const dispatch = useDispatch();

  const addBookmarkHandler = () => {
    dispatch(
      isSaved
        ? deleteBookmarkAction({ id: data.id })
        : createBookmarkAction({ item: data, id: data.id })
    );
  };

  return (
    <Card style={{ marginTop: '8px', display: 'flex' }}>
      <CardMedia
        style={{ minWidth: '270px', height: '150px' }}
        image={data.snippet.thumbnails.medium.url}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          {new Date(data.snippet.publishedAt).toLocaleDateString()}
          <br />
          {data.snippet.title}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', alignItems: 'flex-start', marginLeft: 'auto'}}>
        <IconButton aria-label="add to favorites" onClick={addBookmarkHandler}>
          {isSaved ? (
            <BookmarkIcon color="secondary" />
          ) : (
            <BookmarkBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MyCard;
