// https://floating-ui.com/docs/getting-started

/**
 * b-dropdown
 * Выпадающая плашка с контентом
 *
 * valueAccessor {DropdownParams}
 *
 * allBindings:
 * - inactive {observable<boolean>|null}
 * - target {string} - selector
 */

import {
  computePosition,
  flip,
  shift,
  hide,
  offset,
  arrow,
  autoUpdate,
  size
} from "@floating-ui/dom";
import { getPlacement, createArrow, getArrowStyle } from "./utils";

import "./style.less";
import { toJS } from "knockout";
import { onElementDisposing } from "@/utils/engine/onElementDisposing";

const handle = (
  element,
  valueAccessor,
  allBindings,
  viewModel,
  bindingContext
) => {
  const config = valueAccessor() || {};
  element.classList.add("b-dropdown");

  const inactive = allBindings.get("inactive");

  if (toJS(inactive)) {
    if (element.cleanup) {
      element.cleanup();
      element.cleanup = null;
    }
    return;
  }

  const targetSelector = allBindings.get("target");
  const target = document.querySelector(targetSelector);

  if (target) {
    const {
      width,
      maxWidth,
      minWidth,
      arrow: withArrow = { offset: 15 },
      ...otherParams
    } = config;
    const dropdownParams = {
      placement: "bottom-end",

      flip: true,
      shift: {
        padding: 10
      },
      offset: 10,
      hide: true,
      ...otherParams
    };

    if (withArrow) {
      const arrowElement = createArrow();
      element.appendChild(arrowElement);
      dropdownParams.arrow = arrowElement;
      dropdownParams.arrowParams = withArrow;
    }

    const middleware = [
      dropdownParams.offset && offset(dropdownParams.offset),
      dropdownParams.flip && flip(),
      dropdownParams.shift && shift(dropdownParams.shift),
      dropdownParams.hide && hide(),
      dropdownParams.arrow && arrow({ element: dropdownParams.arrow }),

      size({
        apply({ availableWidth, availableHeight, elements, rects }) {
          const style = {};

          if (width) {
            if (width === "equal") {
              style.width = `${rects.reference.width}px`;
            } else {
              style.width = width;
            }
          }

          if (minWidth) {
            style.minWidth = minWidth;
          }

          if (maxWidth) {
            style.maxWidth = maxWidth;
          }

          Object.assign(element.style, style);
        }
      })
    ].filter(Boolean);

    const cleanup = autoUpdate(target, element, () => {
      computePosition(target, element, {
        placement: dropdownParams.placement,
        middleware
      }).then(({ x, y, placement, middlewareData }) => {
        const dropdownPlacement = getPlacement(placement);
        const visibility = middlewareData?.hide?.referenceHidden
          ? "hidden"
          : "visible";

        Object.assign(element.style, {
          left: `${x}px`,
          top: `${y}px`,
          visibility
        });

        element.setAttribute("data-side", dropdownPlacement.side);
        element.setAttribute("data-align", dropdownPlacement.align);

        if (dropdownParams.arrow) {
          const arrowStyle = getArrowStyle(
            dropdownPlacement,
            middlewareData.arrow,
            dropdownParams.arrowParams
          );

          Object.assign(dropdownParams.arrow.style, arrowStyle);
        }
      });
    });

    element.cleanup = cleanup;
  }

  onElementDisposing(element, () => {
    if (element.cleanup) {
      element.cleanup();
      element.cleanup = null;
    }
  });
};

const init = handle;
const update = handle;

export { init, update };
