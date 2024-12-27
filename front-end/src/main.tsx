import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import LambdaStatus from './lambda-status/lambda-status.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <LambdaStatus />
      <App />
    </Auth0Provider>
  </StrictMode>,
)
