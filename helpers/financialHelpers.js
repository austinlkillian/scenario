export const financialDataTotal = (financialData) => {
  let totalIncome = 0
  financialData.forEach(source => {
    totalIncome += Number(source.amount)
  })
  return totalIncome
}

const checkForData = (sources) => {
  if(sources[0].name && sources[0].amount) return true
  return false
}

export const financeFormFinished = (allSources) => {
  const { incomeSources, billSources } = allSources
  if(checkForData(incomeSources) && checkForData(billSources)) return true
  return false
}

export default {
  financialDataTotal,
  financeFormFinished,
}
