import { PresentationControls, Float, Environment, useGLTF, ContactShadows, Html, Text } from '@react-three/drei'

export default function Experience () {

  const macbook = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
  console.log(macbook);



  return <>
    <ambientLight intensity={0.3} />
    <Environment preset="city" />

    <color args={["#111827"]} attach="background" />

    {/* <OrbitControls makeDefault /> */}
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 300 }}
      snap={{ mass: 4, tension: 300 }}
    >
      <Float rotationIntensity={0.4}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color="lightblue"
          rotation={[0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />
        <primitive
          object={macbook.scene}
          position-y={-1.2}
        >
          <Html
            transform
            wrapperClass="macbookScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="https://metaphore.vercel.app/" />
          </Html>
        </primitive>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          position={[3, 0.50, 0.50]}
          rotation-y={-1.2}
          children={'Metaphore\rception'}
        >
        </Text>
      </Float>
    </PresentationControls >

    <ContactShadows
      position-y={-1.4}
      opacity={0.4}
      scale={5}
      blur={2.5}
    />

  </>
}