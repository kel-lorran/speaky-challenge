/* eslint-disable import/no-anonymous-default-export */
import Home from 'pages/Home';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export default () => {
  return (
    <Routes >
      <Route path="*" element={<Home />}>
      </Route>
    </Routes>
  );
};
