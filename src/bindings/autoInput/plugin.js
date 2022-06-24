class AutosizeInputOptions {
  constructor(params = {}) {
    this.space = "space" in params ? params.space : 30;
  }
}

function createMirror() {
  const mirror = document.createElement("span");
  mirror.style.position = "absolute";
  mirror.style.top = "-999px";
  mirror.style.left = "0";
  mirror.style.whiteSpace = "pre";
  return mirror;
}

const copiedProps = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "fontStyle",
  "letterSpacing",
  "textTransform",
  "wordSpacing",
  "textIndent"
];

const events = [
  "keydown",
  "keyup",
  "input",
  "propertychange",
  "change",
  "blur"
];

class AutosizeInput {
  constructor(input, options = {}) {
    this._input = input;
    this._options = {
      ...AutosizeInput.getDefaultOptions(),
      ...options
    };

    // Init mirror
    this._mirror = createMirror();

    let inputStyle = getComputedStyle(input);
    copiedProps.forEach((prop) => {
      this._mirror.style[prop] = inputStyle[prop];
    });

    document.body.appendChild(this._mirror);

    this.updateHandler = () => this.update();
    events.forEach((event) => {
      this._input.addEventListener(event, this.updateHandler);
    });

    // Update
    this.update();
  }

  getOptions() {
    return this._options;
  }

  update() {
    var value =
      this._input.value || this._input.getAttribute("placeholder") || "";

    // Update mirror
    this._mirror.textContent = value;
    // Calculate the width
    var newWidth = this._mirror.offsetWidth + this._options.space;
    // Update the width
    this._input.style.width = newWidth + "px";
  }

  dispose() {
    events.forEach((event) => {
      this._input.removeEventListener(event, this.updateHandler);
    });
  }
}

AutosizeInput._defaultOptions = new AutosizeInputOptions();
AutosizeInput.getDefaultOptions = function () {
  return this._defaultOptions;
};
AutosizeInput.getInstanceKey = function () {
  return "autosizeInputInstance";
};

function init(input, options) {
  var validTypes = [
    "text",
    "password",
    "search",
    "url",
    "tel",
    "email",
    "number"
  ];

  if (input.tagName !== "INPUT") return;
  if (!validTypes.includes(input.type)) return;

  if (input[AutosizeInput.getInstanceKey()]) return;

  input[AutosizeInput.getInstanceKey()] = new AutosizeInput(input, options);
}

function dispose(input) {
  let instance = input[AutosizeInput.getInstanceKey()];
  if (instance) instance.dispose();
}

export { init, dispose };
