import { Authenticator } from '@aws-amplify/ui-react'
import { signOut } from 'aws-amplify/auth'
import '@aws-amplify/ui-react/styles.css'

function Gallery({ user }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📸 ImageFlow Gallery</h1>
      <p>Welcome, <strong>{user?.username}</strong></p>
      <p>Your images will appear here in Phase 2.</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

export default function App() {
  return (
    <Authenticator>
      {({ user }) => <Gallery user={user} />}
    </Authenticator>
  )
}