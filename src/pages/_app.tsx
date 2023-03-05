import '../styles/globals.css'
import FlowbiteContext from '@/context/FlowbiteContext'
import { SidebarProvider } from '@/context/SidebarContext'
import { Spinner } from 'flowbite-react'
import type { AppProps } from 'next/app'
import { FC, Suspense } from 'react'

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <FlowbiteContext>
      <Suspense
        fallback={
          <div>
            <Spinner size='lg' />
          </div>
        }
      >
        <SidebarProvider>
          <Component {...pageProps} />
        </SidebarProvider>
      </Suspense>
    </FlowbiteContext>
  )
}

export default App
