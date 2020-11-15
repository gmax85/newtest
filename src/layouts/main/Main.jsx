import React from 'react';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="pageWrapper">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
