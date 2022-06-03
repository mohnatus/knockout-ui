export const template = `
  <button class="c-period-picker-control__prev" data-bind="click: toPrevMonth">
    <i-chevron-left ></i-chevron-left>
  </button>
  <span class="c-period-picker-control__month" data-bind="text: monthName"></span>
  <button class="c-period-picker-control__next" data-bind="click: toNextMonth">
    <i-chevron-right ></i-chevron-right>
  </button>
`;
