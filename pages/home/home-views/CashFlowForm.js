import React, { useState } from 'react';
import Container from '@mui/material/Container';
import AdditiveForm from '../../global-components/AdditiveForm';
import { useSelector, useDispatch } from 'react-redux';
import { saveIncomeSources, saveBillSources, saveDebtSources } from '../../../store/slices/formSlice';
import { setHomeView } from '../../../store/slices/homeSlice';

export default function CashFlowForm() {
  const { 
    incomeSources, 
    billSources, 
    debtSources 
  } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [formView, setFormView] = useState(1);

  const changeFormView = (direction) => {
    if(direction === 'back' && formView === 1) {
      dispatch(setHomeView('getStartedView'))
    } else if(direction === 'back' && formView > 1) {
      setFormView(formView - 1)
    } else if(direction === 'next') {
      setFormView(formView + 1)
    } else {
      dispatch(setHomeView('projectionView'))
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
      <h1 className="title">
        Welcome to <span className="textBlue">Scenario</span>
      </h1>
      <h2 className="description">
        Get started by filling out your <strong>financial info:</strong>
      </h2>
      <Container component="main" maxWidth="xs">
        {formView === 1 && 
          <AdditiveForm 
            formView={formView}
            changeFormView={changeFormView} 
            saveForm={saveIncome}
            title="Monthly Income"
            defaultLabel="Income"
            formData={incomeSources}
          />
        }
        {formView === 2 && 
          <AdditiveForm 
            formView={formView}
            changeFormView={changeFormView} 
            saveForm={saveBills}
            title="Monthly Bills"
            defaultLabel="Bill"
            formData={billSources}
          />
        }
        {formView === 3 && 
          <AdditiveForm 
            formView={formView}
            changeFormView={changeFormView} 
            saveForm={saveDebts}
            title="Monthly Debt Payments"
            defaultLabel="Payment"
            formData={debtSources}
          />
        }
      </Container>
    </>
  );
}