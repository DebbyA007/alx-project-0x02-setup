// pages/home.tsx

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
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      {/* Button to open the modal */}
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Add New Post
      </button>

      {/* Conditionally render the modal */}
      {showModal && (
        <PostModal
          onSubmit={handleAddPost}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Render all posts */}
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post, i) => (
          <Card
            key={i}
            title={post.title}
            content={post.content}
          />
        ))
      )}
    </div>
  );
}
