import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '..';
import useDelayedUnmount from '../../hooks/delayedUnMount';

import './styles.css';

const Accordion = ({ children, label }) => {
  const [expanded, setExpand] = useState(false);
  const isMounted = useRef();

  const [state, show, hide] = useDelayedUnmount(500);

  const toggleExpansion = () => setExpand((currState) => !currState);
  const collapse = () => setExpand(false);

  useEffect(() => {
    if (isMounted.current) {
      if (expanded) {
        show();
      } else {
        hide();
      }
    }
    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  return (
    <div className="accordion add" onMouseLeave={collapse}>
      <button className="label" aria-label={label} onClick={toggleExpansion}>
        {expanded ? <Icon name="ImCross" /> : <Icon name="FaPlus" />} {label}
      </button>

      {state !== 'unmounted' && (
        <div
          className={classNames('container', 'dark-gray-bg', {
            'open-up': 'mounting' === state,
            'close-down': 'unmounting' === state,
          })}
          // onClick={toggleExpansion}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
