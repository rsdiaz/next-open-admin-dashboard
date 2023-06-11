import '../styles/globals.css'
import FlowbiteContext from '@/context/FlowbiteContext'
import { SidebarProvider } from '@/context/SidebarContext'
import { Spinner } from 'flowbite-react'
import type { AppProps } from 'next/app'
import { FC, Suspense } from 'react'
import { SettingsProvider } from '@/context/SettingContext'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

const App: FC<AppProps<{ session: Session }>> = ({
  Component,
  pageProps,
}): JSX.Element => {
  return (
    <SessionProvider session={pageProps.session}>
      <SettingsProvider>
        <FlowbiteContext>
          <Suspense
            fallback={
              <div>
                <Spinner size="lg" />
              </div>
            }
          >
            <SidebarProvider>
              <Component {...pageProps} />
            </SidebarProvider>
          </Suspense>
        </FlowbiteContext>
      </SettingsProvider>
    </SessionProvider>
  )
}

export default App
