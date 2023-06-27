import './App.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience.jsx";
import {Configurator} from "./components/Configurator.jsx";
import {CustomizationProvider} from "./context/Customization.jsx";

function App() {

  return (
      <CustomizationProvider>
          <div className="App">
              <Canvas dpr={[1, 2]}>
                  <color attach={'background'} args={['#101010']} />
                  <fog attach="fog" args={['#101010', 10, 20]} />
                  <Experience />
              </Canvas>
              <Configurator />
          </div>
      </CustomizationProvider>
  )
}

export default App
