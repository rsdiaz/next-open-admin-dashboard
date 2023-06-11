import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useAuth(shouldRedirect: any) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (session?.expires === 'RefreshAccessTokenError') {
      signOut({ callbackUrl: '/login', redirect: shouldRedirect })
    }
    console.log(session)
    if (session === null) {
      if (router.route !== '/login') {
        setTimeout(() => {
          router.replace('/login')
          setIsAuthenticated(false)
        }, 5000)
      }
    } else if (session !== undefined) {
      if (router.route === '/login') {
        router.replace('/')
      }
      setIsAuthenticated(true)
    }
  }, [session, router, shouldRedirect])

  return isAuthenticated
}
