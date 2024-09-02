### Project setup

- Explain dependencies
 
  - three - https://threejs.org/
    - WebGL (Web Graphics Library) is a JavaScript API that enables rendering 3D graphics directly in web browsers without
    the need for plugins. It leverages the power of the GPU to create interactive, high-performance 2D and 3D graphics within web applications.
    - Three.js is a JavaScript library that simplifies creating and rendering 3D graphics in a web browser using WebGL 
  - @react-three/fiber - https://r3f.docs.pmnd.rs/getting-started/introduction - everything that is possible in three.js it's also
    possible in react-three/fiber
  - @react-three/drei - https://github.com/pmndrs/drei - useful helpers for react-three/fiber like, camera, camera-controls, shapes, loaders, ect...
  - @react-three/postprocessing - https://github.com/pmndrs/react-postprocessing?tab=readme-ov-file wrapper for processing created for three.js
    Imagine you’re coloring a picture, and after you finish, you want to make it look even cooler by adding sparkles, shadows, or making it glow
    https://pmndrs.github.io/postprocessing/public/docs/
  - gsap - https://github.com/greensock/GSAP
  - jotai - Minimalistic state management library for React, key feature - atomic state - Each atom represents a single piece of state
- Explain App.jsx
  - <Canvas shadows /> container for 3D scene, shadows enables shadow mapping to 3D scene
  - FOV: the part of the scene that is visible on display at any given moment.
    FOV is typically applied to perspective cameras, which mimic the way human eyes perceive depth and distance.
    fov: 45 means angular width of the scene that is covered through the lens of the camera
  - https://www.techtarget.com/whatis/definition/field-of-view-FOV
  - Perspective camera - what we see in the games, camera in our phone, objects closed to the camera are larger, they take more space
    than the object that are far from the camera
  - OrbitControls is a component that adds mouse controls to the scene, allowing you to rotate, pan, and zoom the camera by dragging the mouse.
    This makes it easy to explore the 3D scene interactively.
  - The mesh component is a fundamental building block in Three.js and R3F. It represents a 3D object in the scene that
    can have a geometry (shape) and a material (appearance)
  - boxGeometry defines the shape of the 3D object, which in this case is a box (a cube)
  - meshNormalMaterial is the material applied to the surface of the mesh. It displays the surface normals of the object as colors, 
    creating a colorful, shiny effect that helps visualize the shape and orientation of the object’s faces.