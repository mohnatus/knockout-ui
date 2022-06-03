export const template = `
  <div 
    data-bind="component: {
        name: resultComponent,
        
        params: {
          value: textValue,
          placeholder: placeholder,
          disabled: disabled,
          clearable: clearable,
        }, 
      }, 
      event: {
        activate: function() {
          showCalendar(true);
        },
        clear: function() {
          showCalendar(false);
        }
      },
      attr: {
        id: _id,
      }"></div>

    <c-dropdown  
      params="target: _id, 
      className: 'c-period-picker-dropdown',
      open: showCalendar, 
      dropdownParams: dropdownParams,
      modal: modal">
      <div class="c-period-picker__dropdown" data-bind="attr: {
        'data-component': visibleComponent 
      }">

        <div class="c-period-picker__wrapper">
          <div class="c-period-picker__tabs">
            <button type="button" 
              data-bind="click: function() { 
                toggleComponent('from');
              },
              css: {
                active: visibleComponent() === 'from'
              }">Начало периода</button>
            <button type="button" 
              data-bind="click: function() { 
                toggleComponent('to');
              },
              css: {
                active: visibleComponent() === 'to'
              }">Конец периода</button>
          </div>

          <div class="c-period-picker__components">
            <div class="c-period-picker__fields">
              <div class="c-period-picker__from">
                <c-period-picker-field  params="inputValue: fromInput"></c-period-picker-field>
              </div>
              <div class="c-period-picker__to">
                <c-period-picker-field  params="inputValue: toInput"></c-period-picker-field>
              </div>
            </div>

            <div class="c-period-picker__calendars">
              <div class="c-period-picker__from">
                <c-period-picker-control  params="monthName: monthName, toPrevMonth: prevMonth, toNextMonth: nextMonth"></c-period-picker-control>

                <div class="c-period-picker__calendar">
                  <c-period-picker-calendar
                    params="month: month, selectedPeriod: localValue"
                    data-bind="
                      event: {
                        select: function (_, event) {
                          select(event.details);
                        }
                      }
                    "
                  ></c-period-picker-calendar>
                </div>
              </div>

              <div class="c-period-picker__to">
              
                <c-period-picker-control  params="monthName: secondMonthName, toPrevMonth: prevMonth, toNextMonth: nextMonth"></c-period-picker-control>

                <div class="c-period-picker__calendar">
                  <c-period-picker-calendar
                    params="month: secondMonth, selectedPeriod: localValue"
                    data-bind="
                      event: {
                        select: function (_, event) {
                          select(event.details);
                        }
                      }
                    "
                  ></c-period-picker-calendar>
                </div>
              </div>
            </div>   
          </div>

          <!-- ko if: withRanges -->
          <div class="c-period-picker__ranges">
            <!-- ko foreach: { data: ranges, as: 'range' } -->
              <div class="c-period-picker__range" data-bind="text: range.name, click: function() {
                $parent.setRange(range)
              }, css: {
                active: $parent.localRangeId() === range.id
              }"></div>
            <!-- /ko -->

            <div class="c-period-picker__range" data-bind="click: function() { setRange(null) },
              css: {
                active: !localRangeId()
              }">Произвольный</div>
          </div>
          <!-- /ko -->
        </div>

        <c-period-picker-actions params="modal: modal, apply: save, reset: reset"></c-period-picker-actions>
        
      </div>
    </c-dropdown>
`;
