import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="w-64 h-8 bg-gray-300 relative overflow-hidden">
        <div
          className="h-full bg-primary-via absolute top-0 left-0"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-center mt-2 text-white font-mono text-2xl">
        {progress}%
      </div>
    </Html>
  );
};

export default Loader;
