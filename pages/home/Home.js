import React from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import CashFlowForm from './home-views/CashFlowForm';
import ProjectionView from './home-views/ProjectionView';

export default function Home() {
  const { 
    homeView 
  } = useSelector((state) => state.home);

  return (
    <>
      <CssBaseline />
      {homeView === 'cashFlowView' && <CashFlowForm />}
      {homeView === 'projectionView' && <ProjectionView />}
    </>
  );
}