import React from 'react';
import styles from '../../styles/Home.module.css';
import CashFlowForm from './home-components/CashFlowForm';
import DebtSourcesForm from './home-components/DebtSourcesForm';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <span className={styles.textBlue}>Debt Projector</span>
      </h1>

      <p className={styles.description}>
        Get started by filling out your <strong>financial info:</strong>
      </p>
      <CashFlowForm />
      <DebtSourcesForm />
    </>
  );
}