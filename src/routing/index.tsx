/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export default () => {
  return (
    <Routes >
      <Route path="*" element={<div>Hello</div>}>
      </Route>
    </Routes>
  );
};
