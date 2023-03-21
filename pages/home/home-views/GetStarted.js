import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setHomeView } from '../../../store/slices/homeSlice';

export default function CashFlowForm() {
  const { formFinished } = useSelector(state => state.form)
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="title">
        Welcome to <span className="textBlue">Scenario</span>
      </h1>
      <h2 className="description">
        Get started by filling out your <strong>financial info</strong>
      </h2>
      <Container component="main" maxWidth="xs">
        { !formFinished && <Button
            type="button"
            onClick={() => dispatch(setHomeView('cashFlowView'))}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Get Started
          </Button>
        }
        { formFinished && 
          <>
            <Button
              type="button"
              onClick={() => dispatch(setHomeView('cashFlowView'))}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit Finances
            </Button>

            <Button
              type="button"
              onClick={() => dispatch(setHomeView('breakdownView'))}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              See To Financial Breakdown
            </Button>
          </>
        }
      </Container>
    </>
  );
}