import { Route, Routes } from "react-router-dom"
import routeConfig from "./routes/routes.config"
import UserIndex from "./pages/user/UserIndex";
import About from "./pages/user/About";

function App() {
 
  const renderRouter = (routes)=>{
    return routes.map((router,index)=>(
        <Route key={index} path={router.path} element={router.element}>
          {router.children && renderRouter(router.children)}
        </Route>
      ))
  } 
  // console.log(renderRouter(routeConfig));
  return (
    
    <>
      <Routes>
        {renderRouter(routeConfig)}
      </Routes>
    </>
  )
}

export default App
