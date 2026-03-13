import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Instance, Instances, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Represents a single server node in our rack
function ServerNode({ position, color, index }: { position: [number, number, number], color: string, index: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  const glowMaterial = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state) => {
    // Make individual servers pulse their emissive intensity
    if (glowMaterial.current) {
      glowMaterial.current.emissiveIntensity = 
        Math.max(0.2, Math.sin(state.clock.elapsedTime * 2 + index) * 0.8 + 0.2);
    }
  });

  return (
    <group position={position}>
      {/* Chassis */}
      <Box args={[4, 0.4, 3]}>
        <meshStandardMaterial color="#1a1a24" roughness={0.7} metalness={0.8} />
      </Box>
      {/* Front Panel Glow Line */}
      <Box args={[3.8, 0.1, 0.1]} position={[0, 0, 1.5]}>
        <meshStandardMaterial 
          ref={glowMaterial}
          color={color} 
          emissive={color}
          emissiveIntensity={0.5} 
          toneMapped={false} 
        />
      </Box>
    </group>
  );
}

// Represents the entire rack of servers
function ServerRack() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Slowly auto-rotate the rack for a cinematic feel
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const numServers = 8;
  const servers = useMemo(() => {
    return Array.from({ length: numServers }).map((_, i) => ({
      // Stack servers vertically
      position: [0, (i - numServers / 2) * 0.6, 0] as [number, number, number],
      // Alternate colors: blue (compute) and purple/magenta (data)
      color: i % 3 === 0 ? '#a855f7' : '#3b82f6',
      index: i
    }));
  }, []);

  return (
    <group ref={group}>
      {/* Main Structural Rack Frame */}
      <Box args={[4.4, numServers * 0.6 + 0.8, 3.2]} position={[0, -0.3, 0]}>
        <meshStandardMaterial color="#0f0f13" roughness={0.9} metalness={0.1} wireframe={true} />
      </Box>

      {/* Insert Servers */}
      {servers.map((server, i) => (
        <ServerNode 
          key={i} 
          index={server.index} 
          position={server.position} 
          color={server.color} 
        />
      ))}
    </group>
  );
}

// Floating Data Packets (Instances for better performance)
function DataParticles() {
  const count = 50;
  const ref = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 15;
        const z = (Math.random() - 0.5) * 10;
        const speed = Math.random() * 2 + 1;
        temp.push({ x, y, z, speed, offset: Math.random() * 100 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
        particles.forEach((particle, i) => {
            let { x, y, z, speed, offset } = particle;
            // Particles flow upwards simulating data uploading
            const currentY = ((state.clock.elapsedTime * speed + offset) % 15) - 7.5;
            dummy.position.set(x, currentY, z);
            
            // Add slight wobble
            dummy.position.x = x + Math.sin(state.clock.elapsedTime + i) * 0.5;
            dummy.position.z = z + Math.cos(state.clock.elapsedTime + i) * 0.5;

            dummy.updateMatrix();
            ref.current.setMatrixAt(i, dummy.matrix);
        });
        ref.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={ref} args={[null!, null!, count]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#3b82f6" toneMapped={false} />
    </instancedMesh>
  );
}

export function Infrastructure3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto opacity-70 mask-image-right md:w-1/2 cursor-grab active:cursor-grabbing z-0">
      <Canvas camera={{ position: [8, 5, 8], fov: 45 }}>
        <fog attach="fog" args={['#09090b', 5, 20]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 5]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        
        <ServerRack />
        <DataParticles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.4}
        />
      </Canvas>
    </div>
  );
}
