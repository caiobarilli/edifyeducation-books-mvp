import React from 'react';

export default ({ className, ...props }) => {
  return <hr className={className} {...props}></hr>;
};
