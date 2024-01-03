import { Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className="bg-slate-300">
      <BrowserRouter>
        Navbar
        <Routes>
          <Route path="/" element={"Home"} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
