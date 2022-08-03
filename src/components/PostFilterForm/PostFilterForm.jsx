import React, { useRef, useState } from 'react';

function PostFilterForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    // use debounce
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const searchFromValue = {
        searchTerm: value,
      };
      onSubmit(searchFromValue);
    }, 300);
  };
  return (
    <form action=''>
      <input type='text' value={searchTerm} onChange={(e) => handleSearchTermChange(e)} />
    </form>
  );
}

export default PostFilterForm;
