export const template = `
  <div class="c-period-picker-result__input" 
  data-bind="click: onClick">
    <input  data-bind="textInput: value, attr: {
      placeholder: placeholder
    }">
  </div>
  <!-- ko if: clearable -->
    <!-- ko if: value -->
      <button type="button" class="c-period-picker-result__clear" 
        data-bind="click: clear">
        <i-cross></i-cross>  
        </button>
    <!-- /ko -->
  <!-- /ko -->
  <i-calendar class="c-period-picker-result__icon" data-bind="click: onClick"></i-calendar>
`;
