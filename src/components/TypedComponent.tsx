
import { useState, useEffect } from 'react';

const TypedComponent = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    'Crafting Ideas into Code',
    'Java Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Front End Developer'
  ];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = currentIndex === currentWord.length + 1;
    const shouldChangeWord = currentIndex === 0 && isDeleting;

    if (shouldChangeWord) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else if (shouldDelete) {
      setIsDeleting(true);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setText(currentWord.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentWordIndex, isDeleting, words]);

  return (
    <span className="font-mono">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypedComponent;
