import React from 'react';
import { FaBug, FaEmpire, FaPlus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import './styles.css';

const findIcon = (iconName) => {
  let Comp = null;
  switch (iconName) {
    case 'FaBug':
      Comp = FaBug;
      break;
    case 'FaEmpire':
      Comp = FaEmpire;
      break;
    case 'FaPlus':
      Comp = FaPlus;
      break;
    case 'ImCross':
      Comp = ImCross;
      break;
    default:
  }

  if (Comp === null) return null;
  return <Comp />;
};

const Icon = (props) => {
  const { name } = props;

  return <span className="icon">{findIcon(name)}</span>;
};

export default Icon;
