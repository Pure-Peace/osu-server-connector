import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../../routes';
import Fallback from '../Fallback';

const AppRouter = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default AppRouter;
