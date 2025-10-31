import '@tldraw/tldraw/tldraw.css'
import { Tldraw } from '@tldraw/tldraw'
import './App.css'

function App() {
  const licenseKey = import.meta.env.VITE_TLDRAW_LICENSE_KEY

  return (
    <div className="tldraw-wrapper">
      <Tldraw autoFocus licenseKey={licenseKey} />
    </div>
  )
}

export default App
