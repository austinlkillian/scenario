import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AdditiveForm from '../../global-components/AdditiveForm';
import { useSelector, useDispatch } from 'react-redux';
import { saveIncomeSources, saveBillSources, saveDebtSources } from '../../../store/slices/formSlice';

export default function CashFlowForm() {
  const { 
    incomeSources, 
    billSources, 
    debtSources 
  } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [formView, setFormView] = useState(1);

  const changeFormView = (direction) => {
    if(direction === 'back') {
      setFormView(formView - 1)
    } else {
      setFormView(formView + 1)
    }
  }

  const saveIncome = (data) => {
    dispatch(saveIncomeSources(data))
  }

  const saveBills = (data) => {
    dispatch(saveBillSources(data))
  }

  const saveDebts = (data) => {
    dispatch(saveDebtSources(data))
  }

  return (
    <>
      <p className="description">
        Get started by filling out your <strong>financial info:</strong>
      </p>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>Here is your monthly financial breakdown:</h1>
      </Container>
    </>
  );
}