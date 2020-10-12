import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Layout from './components/layout';
import SearchPage from './pages/SearchPage';
import BookmarksPage from './pages/BookmarksPage';

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Router>
        <AppBar position="static">
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
            <LinkTab label="Домой" to="/home" />
            <LinkTab label="Закладки" to="/bookmarks" />
          </Tabs>
        </AppBar>

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
      </Router>
    </Layout>
  );
}

export default App;
