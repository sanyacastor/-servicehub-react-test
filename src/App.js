import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Layout from './components/layout';
import SearchPage from './pages/SearchPage';
import BookmarksPage from './pages/BookmarksPage';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: '1'}}>Bookmark App</Typography>
          <Button component={Link} to="/home" color="inherit">
            Поиск
          </Button>
          <Button component={Link} to="/bookmarks" color="inherit">
            Мои Закладки
          </Button>
        </Toolbar>
      </AppBar>
      <Layout>
        <Switch>
          <Route path="/home">
            <SearchPage />
          </Route>
          <Route path="/bookmarks">
            <BookmarksPage />
          </Route>
          <Route path="*">
            <SearchPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
