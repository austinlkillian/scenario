import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MonthlyFlow from '../form-views/MonthlyFlow';
import DebtSources from '../form-views/DebtSources';

const theme = createTheme();

export default function CashFlowForm() {
  const [formView, setFormView] = useState(1);

  const changeFormView = (view) => {
    setFormView(view)
  }

  return (
    <ThemeProvider theme={theme}>
      <p className="description">
        Get started by filling out your <strong>financial info:</strong>
      </p>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {formView === 1 && <MonthlyFlow changeFormView={changeFormView} />}
        {formView === 2 && <DebtSources changeFormView={changeFormView} />}
      </Container>
    </ThemeProvider>
  );
}