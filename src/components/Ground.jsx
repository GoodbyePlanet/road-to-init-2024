import { memo, Suspense, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { RepeatWrapping, TextureLoader } from 'three';
import { MeshReflectorMaterial } from '@react-three/drei';

const Ground = () => {
  const roughness = useLoader(TextureLoader, 'textures/wood.jpg');

  useEffect(() => {
    roughness.wrapS = RepeatWrapping;
    roughness.wrapT = RepeatWrapping;
    roughness.repeat.set(5, 5);
    roughness.offset.set(0, 0);

    roughness.colorSpace = 'srgb-linear';
  }, [roughness]);

  // useFrame((state) => {
  //   let time = -state.clock.getElapsedTime() * 0.158;
  //   roughness.offset.set(0, time % 1);
  // });

  return (
    <Suspense fallback={null}>
      <mesh position-y={-0.8} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        {/*<meshBasicMaterial color="blue" />*/}
        <MeshReflectorMaterial
          // reflectorOffset={-5}
          roughnessMap={roughness}
          roughness={1.2}
          resolution={800}
          blur={[100, 100]}
          mixBlur={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
          mixStrength={2.5} // Strength of the reflections
          mixContrast={1} // Contrast of the reflections
          dithering
        />
      </mesh>
    </Suspense>
  );
};

useLoader.preload(TextureLoader, 'textures/wood.jpg');

export default memo(Ground);
