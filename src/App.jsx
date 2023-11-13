import {Canvas} from "@react-three/fiber";
import Test from "./Test.jsx";

function App() {
  return (
    <div id="canvas-container" className="h-screen max-w-4xl mx-auto bg-stone-100 overflow-hidden">
        <Canvas>
                <Test />
        </Canvas>
    </div>
  )
}

export default App
