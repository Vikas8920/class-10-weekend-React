import { useDispatch, useSelector } from "react-redux"
import { login, logout, toggleTheme } from "./store/action"


const App = () => {
  const dispatch = useDispatch()
  const {isAuthenticated, user} = useSelector((state)=> state.auth)

  const theme = useSelector((state)=> state.theme.theme)

  const handleLogin = () =>{
    const userData = {name: 'John Doe', email: 'john@gmail.com'}
    dispatch(login(userData))
  }

  const handleLogout = () =>{
    dispatch(logout())
  }

  const handleToggleTheme = () =>{
    dispatch(toggleTheme())
  }

  const appStyle = {
    backgroundColor: theme === 'light'? '#ffffff': '#333333',
    color: theme === 'light'? '#000000': '#ffffff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }

  return (
    <>
     <div>
       <h1>React Redux Authentication</h1>

      {isAuthenticated?(
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ):(
        <div>
          <h2>Please Login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
     </div>

     <hr/>
     <div style={appStyle}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={handleToggleTheme}>Switch to {theme === 'light'? 'Dark': 'Light'}</button>
     </div>
    </>
  )
}

export default App
