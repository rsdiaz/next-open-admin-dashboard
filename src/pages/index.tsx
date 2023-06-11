import { HiHome } from 'react-icons/hi'
import { Breadcrumb, Spinner } from 'flowbite-react'
import SidebarLayout from '@/layout/sidebar-layout'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSession().then((session) => {
      console.log(session)
      if (session) {
        setLoading(false)
      } else {
        setTimeout(() => {
          router.push('/login', undefined, { shallow: false })
        }, 1500)
      }
    })
  }, [])
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <div className="my-6">
          <h2 className="text-white font-semibold">Loading...</h2>
        </div>
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    )
  } else {
    return (
      <SidebarLayout>
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full mb-1">
            <div className="mb-4">
              <Breadcrumb
                aria-label="Default breadcrumb example"
                className="mb-5"
              >
                <Breadcrumb.Item href="#" icon={HiHome}>
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item>Users</Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                DashBoard
              </h1>
            </div>

            <div className="sm:flex"></div>
          </div>
        </div>
      </SidebarLayout>
    )
  }
}
