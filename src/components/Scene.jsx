import { Environment, OrbitControls } from '@react-three/drei';
import Ground from './Ground.jsx';
import dawn from '../assets/dawn.exr.js';

export const Scene = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
        <Ground />
      </mesh>
      <Environment files={dawn} />
    </>
  );
};