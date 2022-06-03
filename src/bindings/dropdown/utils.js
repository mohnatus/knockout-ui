export function getPlacement(placement) {
  const [side, align = "center"] = placement.split("-");

  return {
    side,
    align
  };
}

export function createArrow() {
  const el = document.createElement("div");
  el.classList.add("b-dropdown-arrow");
  return el;
}

export function getArrowStyle(placement, position, config = {}) {
  const { x, y } = position;
  const { offset = 15 } = config;

  const { side, align } = placement;

  const staticSide = {
    left: "right",
    right: "left",
    top: "bottom",
    bottom: "top"
  }[side];

  let arrowSide = {
    "top-start": "left",
    "top-end": "right",
    "bottom-start": "left",
    "bottom-end": "right",
    "left-start": "top",
    "left-end": "bottom",
    "right-start": "top",
    "right-end": "bottom"
  }[`${side}-${align}`];

  if (arrowSide) {
    return {
      [staticSide]: "-5px",
      [arrowSide]: offset + "px"
    };
  }

  return {
    left: x ? `${x}px` : "",
    top: y ? `${y}px` : "",
    right: "",
    bottom: "",
    [staticSide]: "-5px"
  };
}
