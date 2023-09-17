'use client';

import { cn } from '@/lib/utils';

// h1 heading
export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) {
  return (
    <h1 className={cn('font-sans text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl text-foreground', className)} {...props} />
  );
}

// h2 heading
export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) {
  return (
    <h2
      className={cn(
        'pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0 text-foreground',
        className
      )}
      {...props}
    />
  );
}

// h3 heading
export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) {
  return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight text-foreground', className)} {...props} />;
}

// h4 heading
export function H4({ className, ...props }: React.HTMLAttributes<HTMLHeadElement>) {
  return <h4 className={cn('text-xl font-semibold tracking-tight scroll-m-20 text-foreground', className)} {...props} />;
}

// Paragraph
export function P({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('font-sans leading-7 [&:not(:first-child)]:mt-6 text-foreground', className)} {...props} />;
}

// Muted paragraph
export function Muted({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-muted-foreground', className)} {...props} />;
}

// Small
export function Small({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <small className={cn('text-sm font-medium text-foreground', className)} {...props} />;
}

// Small
export function Tiny({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <small className={cn('text-xs font-medium leading-none text-foreground', className)} {...props} />;
}
