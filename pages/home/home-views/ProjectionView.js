import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

export default function CashFlowForm() {
  const { 
    incomeSources, 
    billSources, 
    debtSources,
    totals
  } = useSelector((state) => state.form);

  const [finalTotal, setFinalTotal] = useState(totals.totalIncome - totals.totalBills - totals.totalDebt)

  return (
    <>
      <h1 className="title">
        Great job filling out your <span className="textBlue">financial info</span>
      </h1>
      <h2 className="description">
        Here is your monthly <strong>financial breakdown:</strong>
      </h2>
      <Box sx={{ width: '90%' }}>
        <p className="description">
          Your monthly <strong>{finalTotal > 0 ? 'Earnings' : 'Losses'}</strong> are:{' '}
          <span className={finalTotal > 0 ? 'income' : 'payment'}>${finalTotal}</span>
        </p>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {incomeSources.map((source, i) => {
              return (
                <Grid key={i} container spacing={1}>
                  <Grid item xs={4}>
                    <h4 className="mtb-sm">{source.name}</h4>
                  </Grid>
                  <Grid item xs>
                    <h4 className="mtb-sm income">${source.amount}</h4>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
          <Grid item xs={4}>
            {billSources.map((source, i) => {
              return (
                <Grid key={i} container spacing={1}>
                  <Grid item xs={4}>
                    <h4 className="mtb-sm">{source.name}</h4>
                  </Grid>
                  <Grid item xs>
                    <h4 className="mtb-sm payment">${source.amount}</h4>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
          <Grid item xs={4}>
            {debtSources.map((source, i) => {
              return (
                <Grid key={i} container spacing={1}>
                  <Grid item xs={4}>
                    <h4 className="mtb-sm">{source.name}</h4>
                  </Grid>
                  <Grid item xs>
                    <h4 className="mtb-sm payment">${source.amount}</h4>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <h4 className="mtb-sm">TOTAL INCOME: <span className="income">${totals.totalIncome}</span></h4>
          </Grid>
          <Grid item xs={4}>
            <h4 className="mtb-sm">TOTAL BILLS: <span className="payment">${totals.totalBills}</span></h4>
          </Grid>
          <Grid item xs={4}>
            <h4 className="mtb-sm">TOTAL DEBT PAYMENTS: <span className="payment">${totals.totalDebt}</span></h4>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}