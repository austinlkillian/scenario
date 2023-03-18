export const financeFormFinished = (totals) => {
  if ( totals.totalIncome && totals.totalBills ) return true;
  return false
}

export default {
  financeFormFinished
}