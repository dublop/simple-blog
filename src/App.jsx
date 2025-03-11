import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router'
import Home  from './pages/Home'
import Posts, { postsLoader }  from './pages/Posts'
import RootLayout  from './layout/RootLayout'
import PostDetails, { postDetailsLoader }  from './components/PostDetails'
import { useContext } from 'react'
import {ThemeContext} from './context/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />

      <Route path='posts' >
        <Route index element={<Posts />} loader={postsLoader}/>
        <Route path=':id' element={<PostDetails />} loader={postDetailsLoader} />
      </Route>
    </Route>
  ))
  
  return (
    <div data-theme={theme}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App



