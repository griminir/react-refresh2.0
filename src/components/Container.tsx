import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='mx-auto max-w-5xl p-4 md:p-8'>{children}</div>;
}
