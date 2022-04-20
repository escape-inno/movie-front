import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  DailyBoxOfficePage,
  MovieCompanyPage,
  MoviePage,
  MoviepersonPage,
} from '../pages';

const RouterContainer = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dailyBoxOffice" element={<DailyBoxOfficePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/moviePerson" element={<MoviepersonPage />} />
          <Route path="/movieCompany" element={<MovieCompanyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RouterContainer;
