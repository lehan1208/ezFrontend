import React from 'react';

function PostList(props) {
  const { posts } = props;
  //   console.log('🚀 ~ file: PostList.jsx ~ line 5 ~ PostList ~ posts', posts);
  return (
    <ul className='post-list'>
      {posts && posts.length > 0 && posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

export default PostList;
