import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useTheme } from '../../../ThemeProvider';
import ThemeControl from '../../ThemeControl/ThemeControl';
import logoText from '../../../assets/logo-text.svg';
import logoTextWhite from '../../../assets/logo-text-white.svg';
import classes from './Header.styles.less';

export default function Header() {
  const [theme] = useTheme();

  return (
    <header className={cx(classes.header, classes[theme])}>
      <div className={classes.headerBody}>
        <Link to="/">
          <img
            className={classes.logo}
            src={theme === 'light' ? logoText : logoTextWhite}
            alt="Logo"
            width={340}
            height={72}
          />
        </Link>
        <p className={classes.description}>Tiny tools to learn</p>
      </div>
      <ThemeControl className={classes.themeControl} />
    </header>
  );
}
