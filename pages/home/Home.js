import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFormState } from '../../store/slices/formSlice';
import { setHomeView } from '../../store/slices/homeSlice';
import CssBaseline from '@mui/material/CssBaseline';
import CashFlowForm from './home-views/CashFlowForm';
import GetStarted from './home-views/GetStarted';
import ProjectionView from './home-views/ProjectionView';

export default function Home() {
  const { 
    homeView 
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const setFormData = async () => {
    const financialData = localStorage.getItem('debtProjectorFinancialData')
    if(financialData) {
      await dispatch(setFormState(JSON.parse(financialData)));
      dispatch(setHomeView('projectionView'))
    }
  }

  useEffect(() => {
    setFormData();
  }, [])

  return (
    <>
      <CssBaseline />
      {homeView === 'getStartedView' && <GetStarted />}
      {homeView === 'cashFlowView' && <CashFlowForm />}
      {homeView === 'projectionView' && <ProjectionView />}
    </>
  );
}