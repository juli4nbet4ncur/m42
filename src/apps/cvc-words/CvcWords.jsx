import React from 'react';
import { useDocumentTitle } from 'xooks';
import Background from '../../components/Background/Background';
import CursorControl from './WordControl/WordControl';
import data from './data';
import classes from './CvcWords.styles.less';

export default function CvcWords() {
  useDocumentTitle('CVC words');

  const controls = data.map((group) => {
    const values = group.data.map((value) => (
        <CursorControl key={value} value={value}/>
    ));

    return (
        
          <div className={classes.flipcard}>
            <div className={classes.flipcard__inner} onContextMenu={(e)=> e.preventDefault()}>
              <div className={classes.__front}>
                <p>{group.data}</p>
              </div>
              <div className={classes.__back}>
                <p>{group.title}</p>
              </div>
            </div>
          </div>
    );
  });

  return <Background className={classes.wrapper}>
    <div className={classes.flipcards}>
      {controls}
      </div>
      </Background>;
}
