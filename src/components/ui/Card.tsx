import * as React from 'react';
import { cn } from '../../utils/twMerge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow',
        className
      )}
      {...props}
    />
  );
}