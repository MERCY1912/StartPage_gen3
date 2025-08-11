import React from 'react';

export const BackgroundAccent: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 -z-10 opacity-5 pointer-events-none">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 200 Q150 -50 400 200"
          stroke="#E0D8D5"
          strokeWidth="2"
        />
        <path
          d="M-100 250 Q200 0 400 250"
          stroke="#E0D8D5"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
