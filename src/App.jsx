import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router'
import Home  from './pages/Home'
import Posts, { postsLoader }  from './pages/Posts'
import RootLayout  from './layout/RootLayout'
import PostDetails, { postDetailsLoader }  from './components/PostDetails'
import Navbar from './components/Navbar'

function App() {
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
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App



