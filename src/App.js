import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home';

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
