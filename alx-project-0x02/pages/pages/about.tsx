import React from 'react';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function AboutPage() {
  return (
    <div className="p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <div className="space-x-4">
        <Button size="small" shape="rounded-sm">
          Small / rounded-sm
        </Button>

        <Button size="medium" shape="rounded-md">
          Medium / rounded-md
        </Button>

        <Button size="large" shape="rounded-full">
          Large / rounded-full
        </Button>
      </div>
    </div>
  );
}
