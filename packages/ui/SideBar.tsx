import * as React from 'react';

interface Props {
  children?: React.ReactNode;
}

const SideBar = ({ children }: Props) => {
  return (
    <div>
      <h1>SideBar</h1>
      {children}
    </div>
  );
};

export default SideBar;
