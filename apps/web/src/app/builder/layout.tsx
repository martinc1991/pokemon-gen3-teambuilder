export default function BuilderLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className='flex flex-col items-center flex-1 min-h-screen'>{children}</div>;
}
