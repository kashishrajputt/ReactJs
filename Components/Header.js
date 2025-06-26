import Link from 'next/link';
import React from 'react';

const Header = (props) => {
  return (
    <div className="bg-red-800 flex items-center justify-between px-6 py-3">
      {/* Left: Logo */}
      <h2 className="font-bold text-lg">Logo</h2>

      {/* Right: Navigation Links */}
      <div className="flex gap-6">
        <Link href='/About'>About</Link>
        <Link href='/Product'>Product</Link>
        <Link href='/Courses'>Courses</Link>
      </div>
    </div>
  );
};

export default Header;
