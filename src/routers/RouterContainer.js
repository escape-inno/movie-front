import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import {
  HomePage,
  DailyBoxOfficePage,
  MovieCompanyPage,
  MoviePage,
  MoviePeoplePage,
  DailyBoxOfficeDetailPage,
} from '../pages';
const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dailyBoxOffice" element={<DailyBoxOfficePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/MoviePeoplePage" element={<MoviePeoplePage />} />
          <Route path="/movieCompany" element={<MovieCompanyPage />} />
          <Route path="/detail" element={<DailyBoxOfficeDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default RouterContainer;
