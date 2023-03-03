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
        {formView === 1 && 
          <AdditiveForm 
            formView={formView}
            changeFormView={changeFormView} 
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