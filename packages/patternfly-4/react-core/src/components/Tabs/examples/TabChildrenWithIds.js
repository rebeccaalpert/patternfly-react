import React from 'react';
import { Tabs, Tab, TabChild } from '@patternfly/react-core';

class TabChildrenWithIds extends React.Component {
  state = {
    activeKey: 0,
  };

  // Toggle currently active tab
  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() {
    return <React.Fragment>
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1" tabChildId="tab1Section"></Tab>
        <Tab eventKey={1} title="Tab item 2" tabChildId="tab2Section"></Tab>
        <Tab eventKey={2} title="Tab item 3" tabChildId="tab3Section"></Tab>
      </Tabs>
      <div>
        <TabChild eventKey={0} id="tab1Section">Tab 1 section</TabChild>
        <TabChild eventKey={1} id="tab2Section">Tab 2 section</TabChild>
        <TabChild eventKey={2} id="tab3Section">Tab 3 section</TabChild>
      </div>
    </React.Fragment>;
  }
}

export default TabChildrenWithIds;
