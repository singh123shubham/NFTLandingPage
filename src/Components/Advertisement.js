import React, { useState, useEffect } from 'react';

const Advertisement = () => {
  const [text, setText] = useState('');
  const fullText = 'Advertisement Advertisement Advertisement';

  const typeText = () => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setText(''); 
        typeText(); 
      }
    }, 100); 

    return intervalId;
  };

  useEffect(() => {
    const intervalId = typeText();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bg-slate-400  h-20  m-2 flex justify-center items-center'>
      <h3 className='text-sm md:text-base lg:text-lg text-white truncate'>
        {text}
      </h3>
    </div>
  );
};

export default Advertisement;
