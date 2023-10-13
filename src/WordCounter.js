import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Hi..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={11}
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;
