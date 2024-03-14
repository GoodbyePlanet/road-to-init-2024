import { useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three';
import { MeshReflectorMaterial, useTexture } from '@react-three/drei';

const Ground = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    'textures/wood_planks_grey_diff_2k.jpg',
    'textures/polystyrene_diff_1k.jpg',
  ]);

  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });

    // normal.encoding = LinearEncoding;
    roughness.encoding = LinearEncoding;
  }, [normal, roughness]);

  useFrame((state, delta) => {
    let t = -state.clock.getElapsedTime() * 0.158;
    roughness.offset.set(0, t % 1);
    normal.offset.set(0, t % 1);
  });

  return (
    <mesh position-y={-0.8} rotation-x={-Math.PI / 2}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        roughnessMap={roughness}
        blur={[100, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={10}
        roughness={1}
        depthScale={1}
        opacity={0.5}
        transparent
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#333"
        metalness={0.5}
        mirror={0}
      />
    </mesh>
  );
};

useTexture.preload('textures/wood_planks_grey_diff_2k.jpg');
useTexture.preload('textures/polystyrene_diff_1k.jpg');

export default Ground;
