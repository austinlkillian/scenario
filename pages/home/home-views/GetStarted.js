import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setHomeView } from '../../../store/slices/homeSlice';

export default function CashFlowForm() {
  const dispatch = useDispatch();

  const getStarted = () => {
    dispatch(setHomeView('cashFlowView'))
  }

  return (
    <>
      <h1 className="title">
        Welcome to <span className="textBlue">Debt Projector</span>
      </h1>
      <h2 className="description">
        Get started by filling out your <strong>financial info</strong>
      </h2>
      <Container component="main" maxWidth="xs">
        <Button
          type="button"
          onClick={getStarted}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Get Started
        </Button>
      </Container>
    </>
  );
}