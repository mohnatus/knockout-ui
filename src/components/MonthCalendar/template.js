export const template = `
<div class="c-month-calendar__wrapper">
  <div class="c-month-calendar__cells c-month-calendar__days">
    <!-- ko foreach: { data: days, as: 'day' } -->
    <div class="c-month-calendar-cell c-month-calendar-day"   
      data-bind="
        click: function() { 
          if (day.disabled) return;
          $parent.onClick(day);
         },
        css: {
          disabled: day.disabled,
          'day-off': day.isWeekend,
          today: day.isToday,
          selected: $parent.isSelected(day),
          'in-range': $parent.isInRange(day),
          first: $parent.isFirstDay(day),
          last: $parent.isLastDay(day)
        },
        event: {
          mouseenter: function() {
            if (day.disabled) return;
            $parent.onHover(day)
          }
        }">
      <div class="c-month-calendar-day__date" data-bind="text: day.date"></div>
    </div>
    <!-- /ko -->
  </div>
</div>
`;
