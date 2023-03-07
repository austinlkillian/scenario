import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AdditiveForm from '../../global-components/AdditiveForm';
import { useSelector, useDispatch } from 'react-redux';
import { saveIncomeSources, saveBillSources, saveDebtSources } from '../../../store/slices/formSlice';

export default function CashFlowForm() {
  const formData = useSelector((state) => state.form);
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
        {formView === 1 && 
          <AdditiveForm 
            formView={formView}
            changeFormView={changeFormView} 
            saveForm={saveIncome}
            title="Monthly Income"
            defaultLabel="Income"
            initialForm={[{
              id: '0',
              name: '0',
              label: 'Income',
              value: '',
              edit: false
            }]}
          />
        }
        {formView === 2 && 
          <AdditiveForm 
            formView={formView}
            changeFormView={changeFormView} 
            saveForm={saveBills}
            title="Monthly Bills"
            defaultLabel="Monthly Bill"
            initialForm={[{
              id: '0',
              name: '0',
              label: 'Monthly Bill',
              value: ''
            }]}
          />
        }
        {formView === 3 && 
          <AdditiveForm 
            formView={formView}
            changeFormView={changeFormView} 
            saveForm={saveDebts}
            title="Debt Sources"
            defaultLabel="Debt Source"
            initialForm={[{
              id: '0',
              name: '0',
              label: 'Debt Source',
              value: ''
            }]}
          />
        }
      </Container>
    </>
  );
}