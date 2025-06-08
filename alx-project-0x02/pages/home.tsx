import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

export default function HomePage() {

  return (
    <div>
      <Header />

      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      {/* rest of your HomePage content */}
    </div>
  );
}
