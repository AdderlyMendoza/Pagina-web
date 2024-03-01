import React from 'react';
import MiVideo from '../assets/WeVideo.webm';
import VideoPlayer from './VideoPlayer';

export const Body = () => {
  return (
    <>
      <div className="container div-principal">
        <div className="row flex-row">
          <div className="col-md-6 d-flex justify-content-center">
            <VideoPlayer />
          </div>
          <div className="col-md-6 div-derecha">
            <div className="div-derecha">
              <p className="e-u-amor">Para mi eterno y único amor</p>
              <h1 className="f-a">¡FELIZ ANIVERSARIO!</h1>
              <p className="mundo">Juntos dimos otra vuelta al sol</p>
              <p className="mundo">No imagino mi vida con nadie más</p>
            </div>
          </div>
        </div>
      </div>
      <div className='border border-danger'>
      </div>
    </>
  );
};
