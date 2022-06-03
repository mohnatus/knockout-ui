import { registerComponent } from "../utils/engine/registerComponent";
import * as Portal from "./Portal";
import * as Dropdown from "./Dropdown";
import * as Icon from "./Icon";
import * as FormField from "./FormField";

registerComponent("c-portal", Portal);
registerComponent("c-dropdown", Dropdown);
registerComponent("c-icon", Icon);
registerComponent("c-form-field", FormField);
