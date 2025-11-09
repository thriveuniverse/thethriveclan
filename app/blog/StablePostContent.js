'use client';  // Client-only for useEffect

import { useState, useEffect } from 'react';
import PostContent from '../components/PostContent';  // FIXED: Up one level from app/blog to app/components

export default function StablePostContent({ mdxSource }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mount after first paint (no reflow shifts)
    requestAnimationFrame(() => setMounted(true));
  }, []);

  if (!mounted) {
    return <div className="min-h-[60vh] flex items-center justify-center">  // Reserves height
      <p className="text-gray-500">Loading...</p>
    </div>;
  }

  return <PostContent mdxSource={mdxSource} />;
}