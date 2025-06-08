import Header from '../components/layout/Header';

import { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts(prev => [{ title, content }, ...prev]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add New Post
      </button>

      {showModal && (
        <PostModal
          onSubmit={handleAddPost}
          onClose={() => setShowModal(false)}
        />
      )}
      
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, i) => (
          <Card key={i} title={post.title} content={post.content} />
        ))
      )}
    </div>
  );
}
