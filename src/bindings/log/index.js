/**
 * Логирование контекста данных
 */

function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
  console.info({
    element,
    valueAccessor,
    allBindings,
    viewModel,
    bindingContext
  });
}

export { init };
