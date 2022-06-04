import { registerComponent } from '@/utils/engine/registerComponent';

import * as SelectList from './SelectList';
import * as SelectListItem from './SelectListItem';
import * as SelectResult from './SelectResult';
import * as SelectResultItem from './SelectResultItem';

export const SelectListComponent = 'c-select-list';
export const SelectListItemComponent = 'c-select-list-item';
export const SelectResultComponent = 'c-select-result';
export const SelectResultItemComponent = 'c-select-result-item';

registerComponent(SelectListComponent, SelectList);
registerComponent(SelectListItemComponent, SelectListItem);
registerComponent(SelectResultComponent, SelectResult);
registerComponent(SelectResultItemComponent, SelectResultItem);
