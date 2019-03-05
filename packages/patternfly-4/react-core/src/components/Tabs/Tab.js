import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the Tab content area. */
  children: PropTypes.node,
  /** additional classes added to the Modal */
  className: PropTypes.string,
  /** Tab title */
  title: PropTypes.string.isRequired,
  /** uniquely identifies the tab */
  eventKey: PropTypes.number.isRequired,
  /** Child id for case in which a child is defined in a separate section from the tab */
  tabChildId: PropTypes.string,
  /** Child reference for case in which a child is defined in a separate section from the tab */
  tabChildRef: PropTypes.object,
};

const defaultProps = {
  children: null,
  className: '',
  tabChildId: '',
  tabChildRef: null,
};

const withForwardedRef = Component => {
  class TabContainer extends React.Component {
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component forwardRef={forwardRef} {...rest} />;
    }
  }
  return React.forwardRef((props, tabChildRef) => {
    return <TabContainer {...props} forwardRef={tabChildRef} />;
  });
}

class Tab extends React.Component {
  render() {
    const { children, eventKey, forwardRef, tabChildId, tabChildRef, ...props } = this.props;
    return <button {...props} ref={forwardRef}>{children}</button>;
  }
}

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default withForwardedRef(Tab);
