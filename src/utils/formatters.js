export const formatFees = (amount) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)

export const formatCET = (score) => (score ? score.toLocaleString('en-IN') : '—')
