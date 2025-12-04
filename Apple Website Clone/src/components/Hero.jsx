import React, { useEffect } from "react";
import { useRef } from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current)
            videoRef.current.playbackRate = 2;
        }, []);


  return (
    <section id="hero" className="my-50">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Pro Title" />
      </div>

        <video src="/videos/hero.mp4" autoPlay  muted playsInline/>

        <button>Buy</button>
        <p>From $1599.00 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
