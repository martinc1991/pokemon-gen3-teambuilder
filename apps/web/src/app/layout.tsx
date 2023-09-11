import LeftSidebar from '../components/sidebars/left-siderbar';
import RightSidebar from '../components/sidebars/right-sidebar';
import '../styles/globals.css';
// include styles from the ui package
import 'ui/style';

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html className='bg-zinc-900' lang='en'>
      <body className='flex flex-row'>
        <LeftSidebar />
        <main className='flex justify-center flex-1'>{children}</main>
        <RightSidebar />
      </body>
    </html>
  );
}
