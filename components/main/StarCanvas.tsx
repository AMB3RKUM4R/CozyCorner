'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

const Stars = () => {
  // Your star field logic here
  return (
    <Points>
      <PointMaterial />
    </Points>
  );
};

const StarCanvas = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
      <Canvas>
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarCanvas;