
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './components/HomePage';
import Videopage from './components/VideoPage';

function App() {

    const router = createBrowserRouter([
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/room/:id",
        element:<Videopage/>
      }
    ])
    return (
  <div>
     <RouterProvider router = {router}/>
  </div>
    
  );
}

export default App;
