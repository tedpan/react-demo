import logo from "./logo.svg"
import "./App.css"
import "./components/Content.js"
import Content from "./components/Content.js"
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <Content className="app-content"></Content>
    </div>
  )
}
export default App
