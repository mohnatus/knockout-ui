import '@/bindings';
import '@/components';

import '@/style/index.less';

import { getScrollbarWidth } from '@/utils/browser/scrollbar';

const scrollbarWidth = getScrollbarWidth();
document.documentElement.style.setProperty(
	'--v-scrollbar-width',
	scrollbarWidth + 'px'
);
