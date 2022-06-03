export function getDateComponents(date) {
  const _date = date.getDate();
  const _month = date.getMonth();
  const _year = date.getFullYear();

  return {
    date: _date,

    month: _month,
    normalizedMonth: _month + 1,

    year: _year
  };
}

function getDateStringComponent(value) {
  return value.toString().padStart(2, "0");
}

export function getClientDate(dateString) {
  if (!dateString) return null;
  const [date, month, year] = dateString.split(".");
  return new Date(`${year}-${month}-${date} 00:00:00.0000`);
}

export function getClientPeriod(periodString) {
  const [from, to] = periodString.split("-");
  const fromDate = getClientDate(from);
  const toDate = getClientDate(to || from);
  return [fromDate, toDate];
}

export function formatClientDate(date) {
  if (!date) return "";

  const { date: _date, normalizedMonth: _month, year } = getDateComponents(
    date
  );

  return `${getDateStringComponent(_date)}.${getDateStringComponent(
    _month
  )}.${getDateStringComponent(year)}`;
}
