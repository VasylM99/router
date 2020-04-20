import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Layout from './components/layout/index';
import Contact from './components/contacts/js/index';
import PostProps from './components/post/js/index';
import PhotoBox from './components/photo/photo';
import HomePage from './components/home/index';

export default function App() {
  return (
  <Router>
      <Layout>
            <Switch>
              <Route path="/post">
                <Post />
              </Route>
              <Route path="/photo">
                <Photo />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              
            </Switch>
      </Layout>
    </Router>
  );
}

function Home() {
  return <HomePage />;
}

function Post() {
  return (
      <PostProps />
  );
}

function Photo() {
  return <PhotoBox />;
}

function Contacts() {
  return <Contact />;
}