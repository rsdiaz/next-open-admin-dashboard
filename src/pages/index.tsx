import Sidebar from '@/components/sidebar'
import { HiChartPie } from 'react-icons/hi'
import Head from 'next/head'
import Navbar from '@/components/navbar';

function ActualSidebar(): JSX.Element {
  return (
    <Sidebar>
      <Sidebar.Logo
        href="#"
        img="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
        imgAlt="Flowbite logo"
      >
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#">
            Kanban
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <ActualSidebar />
      </div>
    </main>
  )
}
