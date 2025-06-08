import Link from 'next/link';

export default function Header() {
  return (
    <nav className="p-4 bg-gray-100 mb-6">
      <ul className="flex space-x-4">
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </nav>
  );
}
