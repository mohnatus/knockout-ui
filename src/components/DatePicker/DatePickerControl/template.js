export const template = `
    <button class="c-date-picker-control__prev" data-bind="click: prevMonth">
        <i-chevron-left ></i-chevron-left>
    </button>
    <span class="c-date-picker-control__month" data-bind="text: monthName"></span>
    <button class="c-date-picker-control__next" data-bind="click: nextMonth">
        <i-chevron-right ></i-chevron-right>
    </button>
`;
