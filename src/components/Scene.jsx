import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Ground from './Ground.jsx';
import Horse from './Model.jsx';

import dawn from '../assets/dawn.exr.js';

export const Scene = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
        {/*<Suspense fallback={null}>*/}
        {/*  <group rotation-y={0} position={[0, -0.8, 0]}>*/}
        {/*    <Horse scale={0.015} />*/}
        {/*  </group>*/}
        {/*</Suspense>*/}
        <Ground />
      </mesh>
      <Environment files={dawn} />
    </>
  );
};