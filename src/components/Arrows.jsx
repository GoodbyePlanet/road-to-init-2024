import React, {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import * as THREE from 'three';

const Arrows = () => {
	const linesRef = useRef();
	const LINE_COUNT = 15000;

	const posArray = new Float32Array(6 * LINE_COUNT);
	const velArray = new Float32Array(2 * LINE_COUNT);

	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
	geometry.setAttribute('velocity', new THREE.BufferAttribute(velArray, 1));

	const material = new THREE.LineBasicMaterial({color: "#bb92cc"});

	for (let lineIndex = 0; lineIndex < LINE_COUNT; lineIndex++) {
		const x = Math.random() * 300 - 200;
		const y = Math.random() * 200 - 100;
		const z = Math.random() * 200 - 100;
		const xx = x;
		const yy = y;
		const zz = z;

		// Line start
		posArray[6 * lineIndex] = x;
		posArray[6 * lineIndex + 1] = y;
		posArray[6 * lineIndex + 2] = z;

		// Line end
		posArray[6 * lineIndex + 3] = xx;
		posArray[6 * lineIndex + 4] = yy;
		posArray[6 * lineIndex + 5] = zz;

		velArray[2 * lineIndex] = velArray[2 * lineIndex + 1] = 0;
	}

	useFrame(() => {
		for (let lineIndex = 0; lineIndex < LINE_COUNT; lineIndex++) {
			velArray[2 * lineIndex] += 0.03;
			velArray[2 * lineIndex + 1] += 0.025;

			posArray[6 * lineIndex + 2] += velArray[2 * lineIndex];
			posArray[6 * lineIndex + 5] += velArray[2 * lineIndex + 1];

			if (posArray[6 * lineIndex + 5] > 200) {
				const z = Math.random() * 200 - 100;
				posArray[6 * lineIndex + 2] = z;
				posArray[6 * lineIndex + 5] = z;
				velArray[2 * lineIndex] = 0;
				velArray[2 * lineIndex + 1] = 0;
			}
		}

		geometry.attributes.position.needsUpdate = true;
	});

	return <lineSegments ref={linesRef} geometry={geometry} material={material}/>;
};

export default Arrows;
