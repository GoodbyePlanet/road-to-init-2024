# INIT 2024 Landing Page

Presentation 

https://docs.google.com/presentation/d/1j5cu1WPvvFVd-DsTQVkPpzAzcBI3hokB7bIkQKRWhYQ/edit#slide=id.g11e36b95797_0_3


### Currently only supports desktop views.

### How to start application:

```
yarn
yarn dev
```

### Debugging

#### For debugging alignment of the 3D objects
Adds a grid to your 3D scene, commonly used as a reference for alignment or understanding spatial layout.
Displays the 3D scene's coordinate axes (X, Y, Z).
```js
<gridHelper args={[10, 10]} />
<axesHelper args={[5]} />
```
