import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import constants from './constants';
import Header from './design/organisms/Header';
import Footer from './design/molecules/Footer';
import Container from './design/atoms/Container';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PostsPage from './pages/Posts';
import PostPage from './pages/Post';
import TagsPage from './pages/Tags';
import NotFoundPage from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate={`%s - ${constants.title}`}
        defaultTitle={constants.title}
      >
        <meta name="description" content={constants.description} />
      </Helmet>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/post/:urlKey" component={PostPage} />
          <Route exact path="/tags" component={TagsPage} />
          <Route exact path="/tags/:tag" component={TagsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
