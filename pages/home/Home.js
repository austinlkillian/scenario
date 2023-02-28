import React from 'react';
import styles from '../../styles/Home.module.css';
import CashFlowForm from './home-components/CashFlowForm';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <span className={styles.textBlue}>Debt Projector</span>
      </h1>

      <CashFlowForm />
    </>
  );
}