import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

const BLUE = "#3b82f6";
const CYAN = "#38bdf8";
const GOLD = "#facc15";

const Ring = ({ radius, tilt, speed, color, size }: { radius: number; tilt: [number, number, number]; speed: number; color: string; size: number }) => {
  const g = useRef<THREE.Group>(null);
  const moon = useRef<THREE.Mesh>(null);
  useFrame((s, d) => {
    const dt = Math.min(d, 0.05);
    if (g.current) g.current.rotation.z += dt * 0.1;
    const t = s.clock.elapsedTime * speed;
    moon.current?.position.set(Math.cos(t) * radius, Math.sin(t) * radius, 0);
    if (moon.current) moon.current.rotation.y += dt * 3;
  });
  return (
    <group rotation={tilt}>
      <group ref={g}>
        <mesh>
          <torusGeometry args={[radius, 0.012, 8, 160]} />
          <meshBasicMaterial color={color} transparent opacity={0.55} />
        </mesh>
      </group>
      <mesh ref={moon} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[size, size, size * 0.25, 32]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} emissive={color} emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
};

const Coin = () => {
  const ref = useRef<THREE.Group>(null);
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 512;
    const x = c.getContext("2d")!;
    const gr = x.createRadialGradient(200, 200, 40, 256, 256, 256);
    gr.addColorStop(0, "#60a5fa"); gr.addColorStop(1, "#1e3a8a");
    x.fillStyle = gr; x.fillRect(0, 0, 512, 512);
    x.strokeStyle = "#bfdbfe"; x.lineWidth = 14;
    x.beginPath(); x.arc(256, 256, 220, 0, Math.PI * 2); x.stroke();
    x.fillStyle = "#ffffff"; x.font = "bold 300px sans-serif";
    x.textAlign = "center"; x.textBaseline = "middle";
    x.fillText("₮", 256, 270);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  useFrame((s, d) => {
    if (!ref.current) return;
    ref.current.rotation.y += Math.min(d, 0.05) * 1.2;
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.6) * 0.25;
  });
  return (
    <Float speed={2} floatIntensity={0.6} rotationIntensity={0.2}>
      <group ref={ref}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.2, 0.22, 64]} />
          <meshStandardMaterial attach="material-0" color="#93c5fd" metalness={1} roughness={0.25} />
          <meshStandardMaterial attach="material-1" map={tex} metalness={0.6} roughness={0.3} />
          <meshStandardMaterial attach="material-2" map={tex} metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

const HeroOrb = () => (
  <div className="w-full h-[320px] md:h-[400px]" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={40} color={CYAN} />
      <pointLight position={[-4, -2, 3]} intensity={20} color={BLUE} />
      <Environment>
        <Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} />
        <Lightformer intensity={1} color={CYAN} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[20, 1, 1]} />
      </Environment>
      <Stars radius={50} depth={30} count={1500} factor={3} fade speed={1.5} />
      <Coin />
      <Ring radius={2} tilt={[1.2, 0.3, 0]} speed={0.9} color={CYAN} size={0.14} />
      <Ring radius={2.3} tilt={[-1.1, -0.5, 0.4]} speed={-0.6} color={GOLD} size={0.11} />
      <Ring radius={1.7} tilt={[0.2, 1.3, 0]} speed={1.3} color={BLUE} size={0.09} />
    </Canvas>
  </div>
);

export default HeroOrb;
