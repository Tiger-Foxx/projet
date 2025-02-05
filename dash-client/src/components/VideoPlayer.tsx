import { useEffect, useRef } from "react";
import dashjs from "dashjs";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = dashjs.MediaPlayer().create();
        player.initialize(videoRef.current, "http://localhost:3000/manifest.mpd", true);
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Lecteur DASH avec React</h1>
      <video ref={videoRef} controls autoPlay style={{ width: "80%", border: "2px solid black" }} />
    </div>
  );
};

export default VideoPlayer;

/***
 ✅ Backend Express qui sert la vidéo.
 ✅ Frontend React avec Vite qui affiche la vidéo.
 ✅ Stream en DASH fonctionnel.
 **/