{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */}

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';



const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Island />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home

// need to credit: "Fox's islands" (https://skfb.ly/6XpAQ) by nimzu is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).