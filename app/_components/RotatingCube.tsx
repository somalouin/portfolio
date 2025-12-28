"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const CUBE_SIZE = 2;
const CUBE_COLOR = 0x6366f1;
const ROUNDED_RADIUS = 0.2;
const ROTATION_SPEED = 0.01;
const CAMERA_FOV = 75;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1000;
const CAMERA_DISTANCE = 5;
const AMBIENT_LIGHT_INTENSITY = 0.5;
const DIRECTIONAL_LIGHT_INTENSITY = 0.8;
const LIGHT_POSITION = { x: 5, y: 5, z: 5 };
const MATERIAL_METALNESS = 0.7;
const MATERIAL_ROUGHNESS = 0.3;

interface SceneState {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  cube: THREE.Mesh;
  geometry: THREE.BufferGeometry;
  material: THREE.MeshStandardMaterial;
  animationId: number;
}

function createRoundedBoxGeometry(
  width: number,
  height: number,
  depth: number,
  radius: number,
  segments: number = 16,
): THREE.BufferGeometry {
  const geometry = new THREE.BoxGeometry(
    width,
    height,
    depth,
    segments,
    segments,
    segments,
  );
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  const halfSize = new THREE.Vector3(width / 2, height / 2, depth / 2);
  const innerSize = new THREE.Vector3(
    halfSize.x - radius,
    halfSize.y - radius,
    halfSize.z - radius,
  );

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const abs = new THREE.Vector3(
      Math.abs(vertex.x),
      Math.abs(vertex.y),
      Math.abs(vertex.z),
    );

    const delta = new THREE.Vector3(
      Math.max(0, abs.x - innerSize.x),
      Math.max(0, abs.y - innerSize.y),
      Math.max(0, abs.z - innerSize.z),
    );

    if (delta.lengthSq() > 0) {
      const corner = new THREE.Vector3(
        Math.sign(vertex.x) * innerSize.x,
        Math.sign(vertex.y) * innerSize.y,
        Math.sign(vertex.z) * innerSize.z,
      );
      const toVertex = vertex.clone().sub(corner);
      const distance = toVertex.length();
      if (distance > radius) {
        toVertex.normalize();
        const newPos = corner.clone().add(toVertex.multiplyScalar(radius));
        position.setXYZ(i, newPos.x, newPos.y, newPos.z);
      }
    }
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

export function RotatingCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneStateRef = useRef<SceneState | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      CAMERA_FOV,
      container.clientWidth / container.clientHeight,
      CAMERA_NEAR,
      CAMERA_FAR,
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = createRoundedBoxGeometry(
      CUBE_SIZE,
      CUBE_SIZE,
      CUBE_SIZE,
      ROUNDED_RADIUS,
    );
    const material = new THREE.MeshStandardMaterial({
      color: CUBE_COLOR,
      metalness: MATERIAL_METALNESS,
      roughness: MATERIAL_ROUGHNESS,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      AMBIENT_LIGHT_INTENSITY,
    );
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(
      0xffffff,
      DIRECTIONAL_LIGHT_INTENSITY,
    );
    directionalLight.position.set(
      LIGHT_POSITION.x,
      LIGHT_POSITION.y,
      LIGHT_POSITION.z,
    );
    scene.add(directionalLight);

    camera.position.z = CAMERA_DISTANCE;

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      cube.rotation.x += ROTATION_SPEED;
      cube.rotation.y += ROTATION_SPEED;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    sceneStateRef.current = {
      scene,
      camera,
      renderer,
      cube,
      geometry,
      material,
      animationId,
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] rounded-lg overflow-hidden"
    />
  );
}
