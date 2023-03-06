import Sidebar from '@/components/sidebar'
import { HiChartPie, HiTemplate, HiTable } from 'react-icons/hi'
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
            <Sidebar.Item href="#">
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
