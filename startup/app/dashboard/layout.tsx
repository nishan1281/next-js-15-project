import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>Header content</header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
};

export default Layout;
