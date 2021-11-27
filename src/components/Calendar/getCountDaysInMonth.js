// const date = new Date();
// const y = date.getFullYear();
// const m = date.getMonth();
// const firstDay = new Date(y, m, 1);
// const lastDay = new Date(y, m + 1, 0);

export function getCountDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
