import React from 'react';
import CashFlowForm from './home-components/CashFlowForm';

export default function Home() {
  return (
    <>
      <h1 className="title">
        Welcome to <span className="textBlue">Debt Projector</span>
      </h1>

      <CashFlowForm />
    </>
  );
}