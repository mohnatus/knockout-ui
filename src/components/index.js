import { registerComponent } from "../utils/engine/registerComponent";
import * as Portal from "./Portal";
import * as Dropdown from "./Dropdown";
import "./Icon";

registerComponent("c-portal", Portal);
registerComponent("c-dropdown", Dropdown);
