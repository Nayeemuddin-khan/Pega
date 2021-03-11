import React from 'react';
import { useParams } from 'react-router-dom';

const RightNavBody = () => {
  const { type, pageName } = useParams();

  return `it's a ${type} for ${pageName} page`; 
};

export default RightNavBody;
