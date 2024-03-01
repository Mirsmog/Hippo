import React from 'react';
import { cn } from '../lib/utils';

interface MaxWidthWrapper extends React.PropsWithChildren {
  className?: string;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapper> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'w-full mx-auto max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
