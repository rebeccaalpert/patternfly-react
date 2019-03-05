import React from 'react';
import { Tabs, Tab, TabChild } from '@patternfly/react-core';

class TabChildrenWithRefs extends React.Component {
  state = {
    activeKey: 0,
  };

  childRef1 = React.createRef();
  childRef2 = React.createRef();
  childRef3 = React.createRef();

  // Toggle currently active tab
  handleTabClick = (event, tabIndex) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  render() {
    return <React.Fragment>
      <Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
        <Tab eventKey={0} title="Tab item 1" tabChildId="refTab1Section" tabChildRef={this.childRef1}></Tab>
        <Tab eventKey={1} title="Tab item 2" tabChildId="refTab2Section" tabChildRef={this.childRef2}></Tab>
        <Tab eventKey={2} title="Tab item 3" tabChildId="refTab3Section" tabChildRef={this.childRef3}></Tab>
      </Tabs>
      <div>
        <TabChild eventKey={0} id="refTab1Section" ref={this.childRef1}>Tab 1 section</TabChild>
        <TabChild eventKey={1} id="refTab2Section" ref={this.childRef2}>Tab 2 section</TabChild>
        <TabChild eventKey={2} id="refTab3Section" ref={this.childRef3}>Tab 3 section</TabChild>
      </div>
    </React.Fragment>;
  }
}

export default TabChildrenWithRefs;
