import React from 'react';
import { useSelector } from 'react-redux';
import CashFlowForm from './home-views/CashFlowForm';
import ProjectionView from './home-views/ProjectionView';

export default function Home() {
  const { 
    homeView 
  } = useSelector((state) => state.home);

  return (
    <>
      <h1 className="title">
        Welcome to <span className="textBlue">Debt Projector</span>
      </h1>

      {homeView === 'cashFlowView' && <CashFlowForm />}
      {homeView === 'projectionView' && <ProjectionView />}
    </>
  );
}