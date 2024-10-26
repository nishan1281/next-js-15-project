import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="text-3xl">Header content for Dashboard</header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </>
  );
};

export default Layout;
