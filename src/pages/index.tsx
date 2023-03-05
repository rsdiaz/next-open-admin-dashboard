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
    <div className="flex dark:bg-gray-900">
      <Navbar />
      <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
      </main>
      <div className="order-1">
        <ActualSidebar />
      </div>
    </div>
  )
}
