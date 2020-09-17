import React from 'react';

interface Props {
  children?: React.ReactNode;
  variant?: 'epic' | 'meh'
}

function Header({ children, variant }: Props) {
  const suffix = variant === 'epic' ? '!!!' : variant === 'meh' ? '...' : '';
  return <h2>
    {children}
    {suffix}
  </h2>;
}

export default Header;
