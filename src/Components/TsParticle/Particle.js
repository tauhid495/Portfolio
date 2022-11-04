import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Particle.css"

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#",
            },
          },
          fpsLimit: 120,
          interactivity: {
            detecton: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },

              onHover: {
                enable: true,
                mode: "connect",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#008b8b",
            },

            links: {
              color: "#9370db",
              distance: 70,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: .3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 180,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
              value: { min: 0, max: 1 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          fullScreen: {
            enable: false,
            zIndex: -1
          },
          detectRetina: true,
        }}

      />

    </div>
  );
};

export default Particle;