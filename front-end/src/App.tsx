import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import { Button } from 'antd';

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
  useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated && user) {
    return (
      <div>
        Hello {user.name}
        <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log out
        </Button>
      </div>
    );
  } else {
    return <Button onClick={() => loginWithRedirect()}>Log in</Button>;
  }
}

export default App
