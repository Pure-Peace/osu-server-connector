import React from 'react';
import { Routes, Route } from 'react-router-dom';

import routes from '../../routes';
import Fallback from '../Fallback';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((view, index) => (
        <Route
          key={index}
          path={view.path}
          element={
            <React.Suspense fallback={<Fallback />}>
              <view.component />
            </React.Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
