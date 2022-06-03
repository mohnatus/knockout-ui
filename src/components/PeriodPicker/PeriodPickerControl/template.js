export const template = `
  <button class="c-period-picker-control__prev" data-bind="click: toPrevMonth">
    <c-icon params="name: 'chevron-left', width: 8, height: 14"></c-icon>
  </button>
  <span class="c-period-picker-control__month" data-bind="text: monthName"></span>
  <button class="c-period-picker-control__next" data-bind="click: toNextMonth">
    <c-icon   params="name: 'chevron-right', width: 8, height: 14"></c-icon>
  </button>
`;
