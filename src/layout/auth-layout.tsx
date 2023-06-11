import { AppConfig } from '@/config/appConfig'
import { PropsWithChildren } from 'react'

type AuthLayoutProps = {
  appConfig: AppConfig
  title: string
}

const AuthLayout = (props: PropsWithChildren<AuthLayoutProps>) => {
  const { appConfig, title, children } = props
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
      <a
        href=""
        className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
      >
        <img src={appConfig.logoUrl} className="mr-4 h-11" alt="Logo" />
        <span>{appConfig.appName}</span>
      </a>
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
