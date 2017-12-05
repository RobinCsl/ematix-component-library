import PropTypes from "prop-types";

export const PropColumn = PropTypes.arrayOf(PropTypes.shape({
  prop: PropTypes.string,
  displayName: PropTypes.string,
  Component: PropTypes.component,
  sortable: PropTypes.bool,
  className: PropTypes.string,
}));


export const PropTypeColumn = PropTypes.shape({
  key: PropTypes.string,
  displayName: PropTypes.string,
  Component: PropTypes.component,
  sortable: PropTypes.bool,
  className: PropTypes.string,
});

