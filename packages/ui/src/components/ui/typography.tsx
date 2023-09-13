import clsx from 'clsx';

function makeTextWhite(classname: string): string {
  return clsx(classname, 'text-white');
}

// h1 heading
export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className={makeTextWhite('font-sans text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl')}>{children}</h1>;
}

// h2 heading
export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={makeTextWhite('pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0')}>
      {children}
    </h2>
  );
}

// h3 heading
export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className={makeTextWhite('scroll-m-20 text-2xl font-semibold tracking-tight')}>{children}</h3>;
}

// h4 heading
export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className={makeTextWhite('text-xl font-semibold tracking-tight scroll-m-20')}>{children}</h4>;
}

// Paragraph
export function P({ children }: { children: React.ReactNode }) {
  return <p className={makeTextWhite('font-sans leading-7 [&:not(:first-child)]:mt-6')}>{children}</p>;
}

// Muted paragraph
export function Muted({ children }: { children: React.ReactNode }) {
  return <p className={'text-sm text-muted-foreground'}>{children}</p>;
}

// Small
export function Small({ children }: { children: React.ReactNode }) {
  return <small className={makeTextWhite('text-sm font-medium leading-none')}>{children}</small>;
}
