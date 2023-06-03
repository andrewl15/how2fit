import React from 'react';
import vid_1 from '../assets/tempholder.mp4';

function HomePage() {
  return (
    <div>
      <video src = {vid_1} autoPlay loop muted />
    </div>
  );
}

export default HomePage;
