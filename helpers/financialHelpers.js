import { cloneDeep } from "lodash"

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

export const formCleanup = (sources) => {
  const cleanSources = cloneDeep(sources)
  cleanSources = cleanSources.filter((source) => {
    return source.name && source.amount
  })
  cleanSources.sort((a, b) => {
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()
    if(nameA < nameB) {
      return -1
    }
  })
  return cleanSources
}

export default {
  financialDataTotal,
  financeFormFinished,
  formCleanup
}
