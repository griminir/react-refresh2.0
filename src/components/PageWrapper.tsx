import React from 'react';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]'>
      {children}
    </div>
  );
}
