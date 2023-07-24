import React from "react";

/**
 * Primary UI component for user interaction
 */
export const Label = ({ color, ...props }) => {
  return (
    <label style={color && { color }} {...props}>
      라벨
    </label>
  );
};
