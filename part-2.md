
### Ground

- Explain <mesh /> mesh is a fundamental building block used to create and display 3D objects.
- A mesh combines geometry (the shape) and material (the appearance) to form a complete 3D object that can be rendered in a scene.
- Explain materials => https://sbcode.net/react-three-fiber/materials/
- MeshBasicMaterial - This material is not affected by lights. - https://threejs.org/docs/#api/en/materials/MeshBasicMaterial
  MeshNormalMaterial - A material that maps the normal vectors to RGB colors. - https://threejs.org/docs/#api/en/materials/MeshNormalMaterial
  MeshPhongMaterial	- A material for shiny surfaces with specular highlights. https://threejs.org/docs/#api/en/materials/MeshPhongMaterial
  MeshStandardMaterial - A standard physically based material, using Metallic-Roughness workflow. https://threejs.org/docs/#api/en/materials/MeshStandardMaterial
- Explain <planeGeometry />
- <planeGeometry /> je JSX komponenta koja se koristi za kreiranje geometrije ravni, što je ravan, pravougaoni oblik u 3D prostoru. 
- Add texture
- Texture - [A23D](https://www.a23d.co/textures/?gad_source=1&gclid=CjwKCAjwk8e1BhALEiwAc8MHiAqeymCHVaLGJQvLOy1Xo0ypr5RtSZ0sWzV6ywlKOU92kPLTy9IRIBoCUjAQAvD_BwE)
- A texture is an image applied to the surface of a 3D model to give it color and detail. Textures enhance the visual appearance of the 3D objects, making them look more realistic or stylized, depending on the desired effect.
- Explain <MeshReflectorMaterial /> - Easily add reflections and/or blur to any mesh. https://github.com/pmndrs/drei?tab=readme-ov-file#meshreflectormaterial
- Increase reflection for better visualization
- Environment - adds light to the scene https://github.com/pmndrs/drei?tab=readme-ov-file#environment
- Purpose: The Environment component provides a way to add environmental lighting and reflections to your 3D scene, enhancing the realism of the materials and overall atmosphere.
- useEffect explanation - Ukratko, ovaj kod učitava teksturu drveta, podešava je da se ponavlja horizontalno i vertikalno 5 puta, i konfiguriše kako će se boje interpretirati u 3D sceni.

NOTE: useFrame add in next part

