import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <div>
      <ReactPlayer url="./WeVideo.mp4" controls playing muted loop />
    </div>
  );
}

export default VideoPlayer;
