import {Canvas} from "@react-three/fiber";
import Test from "./Test.jsx";

function App() {
  return (
    <div id="canvas-container" className="h-screen max-w-2xl ml-auto bg-stone-100">
        <Canvas>
                <Test />
        </Canvas>
    </div>
  )
}

export default App
