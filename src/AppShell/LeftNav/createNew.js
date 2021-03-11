import React from 'react';
import { Accordion, MenuItem } from '../../baseComponents';

const CreateNew = ({ items }) => {
  return (
    <Accordion label="Create">
      {items.map(({ route, label, icon }) => (
        <MenuItem classes="navItemWidth" icon={icon} to={route} label={label} />
      ))}
    </Accordion>
  );
};
export default CreateNew;
