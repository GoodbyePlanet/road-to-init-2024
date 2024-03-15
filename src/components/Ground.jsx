import { memo, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { RepeatWrapping, TextureLoader } from 'three';
import { MeshReflectorMaterial } from '@react-three/drei';

const Ground = () => {
  const roughness = useLoader(
    TextureLoader,
    'textures/wood_planks_grey_diff_2k.jpg',
  );

  useEffect(() => {
    roughness.wrapS = RepeatWrapping;
    roughness.wrapT = RepeatWrapping;
    roughness.repeat.set(5, 5);
    roughness.offset.set(0, 0);

    roughness.colorSpace = 'srgb-linear';
  }, [roughness]);

  useFrame((state) => {
    let time = -state.clock.getElapsedTime() * 0.158;
    roughness.offset.set(0, time % 1);
  });

  return (
    <mesh position-y={-0.8} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        roughnessMap={roughness}
        roughness={1.2}
        resolution={800}
        blur={[100, 100]}
        mixBlur={1}
        mixStrength={10}
        depthScale={1}
        opacity={0.5}
        transparent
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#333"
        metalness={0.5}
        mirror={1}
        dithering
      />
    </mesh>
  );
};

useLoader.preload(TextureLoader, 'textures/wood_planks_grey_diff_2k.jpg');

export default memo(Ground);
