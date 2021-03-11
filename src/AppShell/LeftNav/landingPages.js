import React from 'react';
import { MenuItem } from '../../baseComponents';

const LandingPages = ({items}) => {
    return items.map(item => <MenuItem icon={item.icon} to={item.route} label={item.label} />)
}

export default LandingPages;