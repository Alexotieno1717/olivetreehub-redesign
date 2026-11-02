import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

const Footer = ({ children }: Props) => {
  return (
    <div>
      <h1>Footer</h1>
      {children}
    </div>
  );
};

export default Footer;
