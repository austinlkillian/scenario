import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFormState } from '../../store/slices/formSlice';
import CssBaseline from '@mui/material/CssBaseline';
import LoadingView from './home-views/LoadingView';
import CashFlowForm from './home-views/CashFlowForm';
import GetStarted from './home-views/GetStarted';
import BreakdownView from './home-views/BreakdownView';

export default function Home() {
  const { homeView } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)

  const setFormData = async () => {
    const financialData = await localStorage.getItem('scenarioFinancialData')
    if(financialData) {
      await dispatch(setFormState(JSON.parse(financialData)));
    }
    setLoading(false)
  }

  useEffect(() => {
    setFormData();
  }, [])

  return (
    <>
      <CssBaseline />
      {loading && <LoadingView />}
      {homeView === 'getStartedView' && <GetStarted />}
      {homeView === 'cashFlowView' && <CashFlowForm />}
      {homeView === 'breakdownView' && <BreakdownView />}
    </>
  );
}