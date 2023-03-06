import { HiHome } from 'react-icons/hi'
import { Breadcrumb } from 'flowbite-react';
import SidebarLayout from '@/layout/sidebar-layout';


export default function Home() {
  return (
    <SidebarLayout>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
          <div className="mb-4">
            <Breadcrumb aria-label="Default breadcrumb example" className='mb-5'>
              <Breadcrumb.Item
                href="#"
                icon={HiHome}
              >
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                Users
              </Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All users</h1>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}
