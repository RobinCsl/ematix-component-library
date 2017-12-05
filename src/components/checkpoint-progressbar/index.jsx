import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./checkpointProgress.scss";

const Circle = ({ className, title }) => (
  <span className={classnames(className, "circle")}>
    <span className="title">{title}</span>
  </span>
);
Circle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
Circle.defaultProps = {
  className: "",
  title: "",
};

const Bar = ({ className, children }) => (
  <div className={classnames(className, "bar")}>
    {children}
  </div>
);
Bar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Bar.defaultProps = {
  className: "",
  children: null,
};

const CheckpointProgress = ({ checkPoints, activePoint }) => {
  const renderedProgress = checkPoints.map((title, i) => {
    const classes = classnames({
      isActive: i + 1 <= activePoint,
    });
    return (
      <Bar className={classes}>
        <Circle
          className={classes}
          title={title}
        />
      </Bar>
    );
  });
  return (
    <div className="checkpointProgress">
      {renderedProgress}
      {/* Tail which will turn blue if end reached */}
      <Bar className={classnames({
          isActive: activePoint === checkPoints.length,
        })}
      />
    </div>
  );
};
CheckpointProgress.propTypes = {
  checkPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  activePoint: PropTypes.number,
};
CheckpointProgress.defaultProps = {
  activePoint: 0,
};

export default CheckpointProgress;
