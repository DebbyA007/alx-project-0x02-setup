import { useState } from 'react';

interface PostModalProps {
  onSubmit: (title: string, content: string) => void;
  onClose: () => void;
}

export default function PostModal({ onSubmit, onClose }: PostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">New Post</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Title:
            <input
              className="w-full border p-1"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </label>
          <label className="block mb-4">
            Content:
            <textarea
              className="w-full border p-1"
              value={content}
              onChange={e => setContent(e.target.value)}
              required
            />
          </label>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-3 py-1 border rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
 
