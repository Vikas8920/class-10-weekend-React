import AuthProvider from './Context/AuthProvider'
import Login from './Components/Login'
import UserProfile from './Components/UserProfile'
import ThemeProvider from './Context/ThemeProvider'
import ThemeToggle from './Components/ThemeToggle'

const App = () => {
  return (
    <>
      <AuthProvider>
        <h1>Simple Authentication System</h1>
        <Login/>
        <UserProfile/>
      </AuthProvider>

      <hr/>

      <ThemeProvider>
        <h1>Theme Toggle</h1>
        <ThemeToggle/>
      </ThemeProvider>
    </>
  )
}

export default App
