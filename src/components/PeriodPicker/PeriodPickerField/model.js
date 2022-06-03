export function ViewModel(params, element) {
  element.classList.add("c-period-picker-field");

  const { inputValue } = params;

  return {
    inputValue
  };
}
