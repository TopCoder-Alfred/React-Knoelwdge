import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./router";

const App = () => {
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => {
              console.log({...route});
              const { path } = route;
              return <Route {...route} key={path} />;
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
