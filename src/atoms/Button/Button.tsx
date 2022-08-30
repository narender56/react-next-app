import type { MouseEventHandler, ReactNode } from 'react';
import React from 'react';

export interface ButtonProps {
  children?: string | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
}

export function Button({
  className,
  children,
  onClick,
  type
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}
