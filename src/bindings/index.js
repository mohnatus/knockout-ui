import { registerBinding } from "@/utils/engine/registerBinding";

import * as Dropdown from "./dropdown";
import * as Log from "./log";
import * as AutoInput from "./autoInput";

registerBinding("bDropdown", Dropdown);
registerBinding("bLog", Log);
registerBinding("bAutoInput", AutoInput);
