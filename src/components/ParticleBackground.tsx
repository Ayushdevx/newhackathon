'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadPreset } from '@tsparticles/preset-confetti';
import type { Engine } from '@tsparticles/engine';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0"
      options={{
        preset: 'confetti',
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: ['#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE'],
          },
          shape: {
            type: ['circle', 'triangle', 'polygon'],
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: {
              default: 'bounce',
            },
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
