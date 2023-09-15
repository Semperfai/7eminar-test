export const formatDate = (date: Date): string => {
  const months: string[] = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня'
  ]

  const day = date.getDate()
  const month = months[date.getMonth()]

  return `${day} ${month}`
}
