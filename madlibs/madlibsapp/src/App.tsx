import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Route, Routes, Router } from 'react-router-dom';
import { HomeRoute } from './components/HomeRoute';
import { ListStoriesRoute } from './components/ListStoriesRoute';
import { ViewStoryRoute } from './components/ViewStoryRoute';
import { CreateStoryRoute } from './components/CreateStoryRoute';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomeRoute></HomeRoute>}></Route>
        <Route path="/stories" element={<ListStoriesRoute></ListStoriesRoute>}></Route>
        <Route path="/create-story" element={<CreateStoryRoute></CreateStoryRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
