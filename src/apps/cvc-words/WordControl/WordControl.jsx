import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';
import classes from './WordControl.styles.less';

export default function WordControl({ className, value }) {
  const [theme] = useTheme();

  return (
/*     <div className={cx( classes.control, { [classes.active]: clipboard.copied }, classes[theme], className)}> */

        /* <div className={cx( classes.flipcard )}>
          <div className={classes.flipcard__inner} onContextMenu={(e)=> e.preventDefault()}>
            <div className={classes.__front}>
              <p>{value}</p>
            </div>
            <div className={classes.__back}>
              <p>🚀</p>
            </div>
          </div>
        </div> */
    /* </div> */
    <button
      className={cx(
        classes.control,
        { [classes.active]: clipboard.copied },
        classes[theme],
        className
      )}
      type="button"
      onClick={() => clipboard.copy(value)}
      style={{ cursor: value }}
      title="Click to flip the card"
    >
      {value}
    </button>
    
  );
}

WordControl.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};
