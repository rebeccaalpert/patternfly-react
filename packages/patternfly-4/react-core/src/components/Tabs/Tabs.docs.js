import { Tabs, Tab, TabChild } from '@patternfly/react-core';
import SimpleTabs from './examples/SimpleTabs';
import ScrollButtonsTabs from './examples/ScrollButtonsTabs';
import FilledTabs from './examples/FilledTabs';
import SecondaryTabs from './examples/SecondaryTabs';
import TabChildrenWithIds from './examples/TabChildrenWithIds';
import TabChildrenWithRefs from './examples/TabChildrenWithRefs';

export default {
  title: 'Tabs',
  live: false,
  components: {
    Tabs,
    Tab,
    TabChild
  },
  examples: [
    { component: SimpleTabs, title: 'Primary tabs with sections' },
    { component: ScrollButtonsTabs, title: 'Scroll buttons' },
    { component: SecondaryTabs, title: 'Secondary buttons' },
    { component: FilledTabs, title: 'Filled buttons' },
    { component: TabChildrenWithIds, title: 'Primary tabs with sections outside of the Tabs component (ids)' },
    { component: TabChildrenWithRefs, title: 'Primary tabs with sections outside of the Tabs component (refs)' },
  ]
};
