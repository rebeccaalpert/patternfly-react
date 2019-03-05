import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** content rendered inside the TabChild content area. */
  children: PropTypes.node,
  /** additional classes added to the TabChild */
  className: PropTypes.string,
  /** unique identifier of parent Tab */
  eventKey: PropTypes.number.isRequired,
  /** uniquely identifies the TabChild */
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
  className: null,
};

class TabChild extends React.Component {
  render() {
    const { children, eventKey, id, innerRef, ...props } = this.props;
    return <section {...props} id={id} aria-labelledby={`pf-tab-${eventKey}-${id}`}>{children}</section>;
  }
}

TabChild.propTypes = propTypes;
TabChild.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => (
  <TabChild {...props} ref={ref}>
    {props.children}
  </TabChild>
));
