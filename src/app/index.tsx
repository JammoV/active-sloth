/**
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import constants from './constants';
import Header from './design/organisms/Header';
import Footer from './design/molecules/Footer';
import Container from './design/atoms/Container';
import { HomePage } from './pages/Home/Loadable';
import { About } from './pages/About/Loadable';
import { Posts } from './pages/Posts/Loadable';
import { Post } from './pages/Post/Loadable';
import { Tags } from './pages/Tags/Loadable';
import { NotFoundPage } from './pages/NotFound/Loadable';

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
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/post/:urlKey" component={Post} />
          <Route exact path="/tags" component={Tags} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
