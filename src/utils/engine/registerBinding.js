import { bindingHandlers } from "knockout";

export function registerBinding(bindingName, bindingData) {
  bindingHandlers[bindingName] = bindingData;
}
