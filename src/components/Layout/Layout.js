import { Outlet } from 'react-router-dom';
import { Navigate } from '../Navigate/Navigate.js';
import { Suspense } from 'react';
import { Header } from './Layout.styled.js';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigate />
      </Header>

      <Suspense fallback={'LOADING PAGE...'}>
        <Outlet />
      </Suspense>
    </>
  );
};
