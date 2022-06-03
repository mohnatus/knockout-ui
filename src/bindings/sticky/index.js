/**
 * Sticky-элемент с отслеживанием позиции
 *
 * valueAccessor: "top"|"bottom"
 *
 * allBindings
 * - inactive {observable<boolean>}
 */

import { toJS } from "knockout";

function handle(
  element,
  valueAccessor,
  allBindings,
  viewModel,
  bindingContext
) {
  const placement = valueAccessor() || "top";
  const fixedSide = placement === "bottom" ? "bottom" : "top";

  const inactive = allBindings.get("inactive");

  if (toJS(inactive)) {
    element.classList.remove("b-sticky");
    element.style.position = "";
    element.style[fixedSide] = "";
  } else {
    element.classList.add("b-sticky");
    element.style.position = "sticky";
    element.style[fixedSide] = "-1px";
  }
}

const init = handle;
const update = handle;

export { init, update };
