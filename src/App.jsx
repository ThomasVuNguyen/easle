import '@tldraw/tldraw/tldraw.css'
import { Tldraw } from '@tldraw/tldraw'
import './App.css'

function App() {
  return (
    <div className="tldraw-wrapper">
      <Tldraw autoFocus />
    </div>
  )
}

export default App
