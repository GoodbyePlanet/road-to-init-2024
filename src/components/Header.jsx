import { isSceneLoaded } from '../atoms.js';
import { useAtom } from 'jotai';

const Header = () => {
  const [sceneLoaded, _] = useAtom(isSceneLoaded);

  if (sceneLoaded) {
    return (
      <div>
        <a href="/">
          <img src="/initlogo.png" alt="logo" className="w-32 left-10 top-10 absolute z-50" />
        </a>
        <a
          href="https://www.dzobs.com/"
          rel="noreferrer"
          target="_blank"
          className="w-13 right-40 top-10 absolute z-50 text-white font-semibold"
        >
          <p>DZOBS</p>
        </a>
        <a
          href="https://www.flickr.com/photos/195738908@N05/albums/72177720299447854/"
          rel="noreferrer"
          target="_blank"
          className="w-12 right-24 top-10 absolute z-50 text-white font-semibold"
        >
          <p>INIT 1</p>
        </a>
        <a
          href="https://www.flickr.com/photos/195738908@N05/albums/72177720302433321/"
          rel="noreferrer"
          target="_blank"
          className="w-12 right-10 top-10 absolute z-50 text-white font-semibold"
        >
          <p>INIT 2</p>
        </a>
      </div>
    );
  }
};

export default Header;
