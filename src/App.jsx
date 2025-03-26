
import Body from './Body'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <>
   

<BrowserRouter basename="/">
 <Routes>
   <Route path="/" element={<Body/>}>
   <Route/>3
   </Route>
 </Routes>
</BrowserRouter>
      <NavBar/>
    
    </>
  )
}


export default App
