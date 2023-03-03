import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AdditiveForm from '../../global-components/AdditiveForm';
import MonthlyFlow from '../form-views/MonthlyFlow';
import DebtSources from '../form-views/DebtSources';

export default function CashFlowForm() {
  const [formView, setFormView] = useState(1);

  const changeFormView = (direction) => {
    if(direction === 'back') {
      setFormView(formView - 1)
    } else {
      setFormView(formView + 1)
    }
  }

  return (
    <>
      <p className="description">
        Get started by filling out your <strong>financial info:</strong>
      </p>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {formView === 1 && <MonthlyFlow changeFormView={changeFormView} />}
        {formView === 2 && 
          <AdditiveForm 
            changeFormView={changeFormView} 
            title="Monthly Bills"
            initialForm={[{
              id: '0',
              name: '0',
              label: 'Monthly Bill 1',
              value: 0
            }]}
          />
        }
        {formView === 3 && <DebtSources changeFormView={changeFormView} />}
      </Container>
    </>
  );
}