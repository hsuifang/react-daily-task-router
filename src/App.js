import './App.css'
import {
  Outlet,
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
} from 'react-router-dom'

const Todo = () => {
  return (
    <div>
      <p>這是 Todo 頁面</p>
      <Logout />
    </div>
  )
}

const Login = () => {
  return <p>這是登入頁面</p>
}
const Register = () => {
  return <p>這是註冊頁面</p>
}

const Logout = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => {
        navigate('/login')
      }}
    >
      登出
    </button>
  )
}

const Post = () => {
  return (
    <div>
      <h3>Post 頁面</h3>
      <Outlet />
    </div>
  )
}
const PostDetail = () => {
  let { userId } = useParams()
  return <p>PostID: {userId}</p>
}

function App() {
  return (
    <div className='container'>
      <HashRouter>
        <div className='nav-link'>
          <NavLink to='/'>
            <p>回到首頁</p>
          </NavLink>
          <NavLink to='/register'>
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to='/login'>
            <p>登入頁面</p>
          </NavLink>
          <NavLink to='/todo'>
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to='/post/post1234'>
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>

        <Routes>
          <Route path='todo' element={<Todo />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='post' element={<Post />}>
            <Route path=':userId' element={<PostDetail />} />
          </Route>
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
