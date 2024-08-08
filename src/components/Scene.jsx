import { memo, Suspense, useRef } from 'react';
import { Color } from 'three';
import { Environment, OrbitControls, Text, useFont } from '@react-three/drei';
import Ground from './Ground.jsx';
import Horse from './Model.jsx';
import { BLUE_BLOOM_COLOR, REDDISH_BLOOM_COLOR, WHITE_BLOOM_COLOR, YELLOW_BLOOM_COLOR } from '../colors.js';

import dawn from '../assets/dawn.exr.js';

const whiteBloomColor = new Color(WHITE_BLOOM_COLOR);
// whiteBloomColor.multiplyScalar(5);
const reddishBloomColor = new Color(REDDISH_BLOOM_COLOR);
// reddishBloomColor.multiplyScalar(12);
const yellowBloomColor = new Color(YELLOW_BLOOM_COLOR);
// yellowBloomColor.multiplyScalar(5);
const blueBloomColor = new Color(BLUE_BLOOM_COLOR);
// blueBloomColor.multiplyScalar(5);

const FONT = 'fonts/roboto-webfont.ttf';

const Scene = () => {
  const controls = useRef();

  return (
    <>
      <OrbitControls />
      {/*<CameraControls makeDefault ref={controls} maxPolarAngle={1.6} minDistance={5} maxDistance={20} />*/}
      {/*<Suspense fallback={<ProgressBar />}>*/}
      <group position-x={-8.5} position-y={1.2}>
        <Text
          font={FONT}
          position={[3.4, 0, -4]}
          rotation-y={0}
          fontSize={0.5}
          letterSpacing={-0.05}
          textAlign="center"
        >
          SAY
          <meshBasicMaterial color={yellowBloomColor} toneMapped={false} />
        </Text>
      </group>
      <group position-x={-6.3} position-y={1.2}>
        <Text
          font={FONT}
          position={[3.4, 0, -4]}
          rotation-y={0}
          fontSize={0.5}
          letterSpacing={-0.05}
          textAlign="center"
        >
          HELLO WORLD
          <meshBasicMaterial color={whiteBloomColor} toneMapped={false} />
        </Text>
      </group>
      <group position-x={-2}>
        {'INIT'.split('').map((letter, index) => (
          <Text
            key={index}
            font={FONT}
            position={[index === 3 ? -0.1 : index - 3, 0, -4]}
            rotation-y={0}
            fontSize={1.9}
            textAlign="center"
          >
            {letter}
            <meshBasicMaterial color={index === 1 ? reddishBloomColor : whiteBloomColor} toneMapped={false} />
          </Text>
        ))}
      </group>
      <group position-x={0} position-y={1.2}>
        <Text
          font={FONT}
          position={[3.4, 0, -4]}
          rotation-y={0}
          fontSize={0.5}
          letterSpacing={-0.05}
          textAlign="center"
        >
          IN PERSON
          <meshBasicMaterial color={blueBloomColor} toneMapped={false} />
        </Text>
      </group>
      <Suspense fallback={null}>
        <group rotation-y={0} position={[0, -0.8, 0]}>
          <Horse scale={0.015} />
        </group>
      </Suspense>
      <Text
        font={FONT}
        position={[3.4, 0, -4]}
        rotation-y={0}
        fontSize={1.9}
        letterSpacing={-0.05}
        textAlign="center"
      >
        2024
        <meshBasicMaterial color={whiteBloomColor} toneMapped={false} />
      </Text>
      <Ground />
      {/*</Suspense>*/}
      <Environment files={dawn} />
    </>
  );
};

useFont.preload(FONT);

// export default Scene;
export default memo(Scene);
