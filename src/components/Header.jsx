import { isSceneLoadedAtom } from '../atoms.js';
import { useAtom } from 'jotai';

const Header = () => {
  const [sceneLoaded, _] = useAtom(isSceneLoadedAtom);

  if (sceneLoaded) {
    return (
      <div>
        <a href="/">
          <img src="/initlogo.png" alt="logo" className="absolute left-10 top-10 z-50 w-32" />
        </a>
        <a
          href="https://www.dzobs.com/"
          rel="noreferrer"
          target="_blank"
          className="w-13 absolute right-40 top-10 z-50 font-semibold text-white"
        >
          <p>DZOBS</p>
        </a>
        <a
          href="https://www.flickr.com/photos/195738908@N05/albums/72177720299447854/"
          rel="noreferrer"
          target="_blank"
          className="absolute right-24 top-10 z-50 w-12 font-semibold text-white"
        >
          <p>INIT 1</p>
        </a>
        <a
          href="https://www.flickr.com/photos/195738908@N05/albums/72177720302433321/"
          rel="noreferrer"
          target="_blank"
          className="absolute right-10 top-10 z-50 w-12 font-semibold text-white"
        >
          <p>INIT 2</p>
        </a>
      </div>
    );
  }
};

export default Header;
