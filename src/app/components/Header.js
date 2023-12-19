import Logo from './Logo';
import Navigation from './Navigation';

import { CiLight } from 'react-icons/ci';

export default function Header() {
  return (
    <header className='w-full flex justify-between items-center bg-emerald-600 dark:bg-emerald-950 dark:text-emerald-100 text-emerald-100 p-4'>
      <div className='flex gap-6 items-center'>
        <Logo />
        <Navigation />
      </div>
      <div className='cursor-pointer'>
        <CiLight />
      </div>
    </header>
  );
}
