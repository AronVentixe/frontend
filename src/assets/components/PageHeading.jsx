import React from 'react';

const PageHeading = ({ children }) => {
  return (
    <div className="page-heading">
      <h2 className='page-heading-text'>{children}</h2>
    </div>
  );
};

export default PageHeading;
