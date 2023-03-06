import Sidebar from "@/components/sidebar";
import { Breadcrumb } from "flowbite-react"
import Navbar from '@/components/navbar';
import { HiChartPie, HiTemplate, HiTable, HiHome } from 'react-icons/hi'


function ActualSidebar(): JSX.Element {
  return (
    <Sidebar className="border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
          <Sidebar.Item href="#" icon={HiTemplate}>
            Layouts
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiTable}
            label="CRUD"
          >
            <Sidebar.Item href="#">
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/cruds/users">
              Users
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiTable}
            label="Authentication"
          >
            <Sidebar.Item href="/authentication/sign-in">
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Users
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

const SidebarLayout = ({ children }: any) => {
  return (
    <div className="flex dark:bg-gray-900">
      <Navbar />
      <main className="order-2 lg:ml-[16rem] pt-16 mb-24 flex-[1_0_16rem]">
        {children}
      </main>
      <div className="order-1">
        <ActualSidebar />
      </div>
    </div>
  )
}

export default SidebarLayout
