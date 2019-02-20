import React from 'react';
import { Tabs, Tab, TabChild } from '@patternfly/react-core';

class TabChildrenWithRefs extends React.Component {
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
    const childRef1 = React.createRef();
    const childRef2 = React.createRef();
    const childRef3 = React.createRef();
    return <React.Fragment>
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1" tabChildId="refTab1Section" tabChildRef={childRef1}></Tab>
        <Tab eventKey={1} title="Tab item 2" tabChildId="refTab2Section" tabChildRef={childRef2}></Tab>
        <Tab eventKey={2} title="Tab item 3" tabChildId="refTab3Section" tabChildRef={childRef3}></Tab>
      </Tabs>
      <div>
        <TabChild eventKey={0} id="refTab1Section" ref={childRef1}>Tab 1 section</TabChild>
        <TabChild eventKey={1} id="refTab2Section" ref={childRef2} hidden>Tab 2 section</TabChild>
        <TabChild eventKey={2} id="refTab3Section" ref={childRef3} hidden>Tab 3 section</TabChild>
      </div>
    </React.Fragment>;
  }
}

export default TabChildrenWithRefs;
