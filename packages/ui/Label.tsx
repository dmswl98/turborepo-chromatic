import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Label = ({ children }: Props) => {
  return (
    <div>
      <h1>Label</h1>
      {children}
    </div>
  );
};
