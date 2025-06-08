import React from 'react';
import { ButtonProps } from '../../interfaces';

export default function Button({
  size,
  shape,
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      onClick={onClick}
      className={`btn ${size} ${shape}`}
    >
      {children}
    </button>
  );
}
