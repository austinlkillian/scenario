import React, { useState } from 'react';
import NumberFormatCustom from '../../global-components/NumberFormatCustom'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function CashFlowForm() {
  const [values, setValues] = useState({
    monthlyIncome: 0,
    monthlyBills: 0,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      income: values.monthlyIncome,
      bills: values.monthlyBills,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Monthly Cash Flow
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, minWidth: '400px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="monthlyIncome"
                  name="monthlyIncome"
                  label="Total Monthly Income"
                  required
                  fullWidth
                  autoFocus
                  value={values.monthlyIncome}
                  onChange={handleChange}
                  InputProps={{inputComponent: NumberFormatCustom}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="monthlyBills"
                  name="monthlyBills"
                  label="Total Monthly Bills"
                  required
                  fullWidth
                  value={values.monthlyBills}
                  onChange={handleChange}
                  InputProps={{inputComponent: NumberFormatCustom}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}