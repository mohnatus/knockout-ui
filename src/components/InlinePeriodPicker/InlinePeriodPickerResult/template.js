export const template = `
  <div class="i-period-picker-result__input"
  data-bind="click: onClick">
    <input  data-bind="bAutoInput, textInput: value, attr: {
      placeholder: placeholder
    }">
  </div>
  <!-- ko if: clearable -->
    <!-- ko if: value -->
      <button type="button" class="i-period-picker-result__clear"
        data-bind="click: clear">
        <c-icon params="name: 'cross', width: 16, height: 16"></c-icon>
        </button>
    <!-- /ko -->
  <!-- /ko -->
      <c-icon class="i-period-picker-result__icon" params="name: 'calendar', width: 24, height: 24" data-bind="click: onClick"></c-icon>

`;
