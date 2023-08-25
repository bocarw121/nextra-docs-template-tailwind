import React from 'react';

interface LogoProps {}

export function Logo({}: LogoProps) {
  return (
    <div>
      <span className="text-blue-400 text-3xl">Nextra docs with Tailwind</span>
    </div>
  );
}
