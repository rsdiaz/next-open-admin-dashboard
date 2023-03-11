import { CustomFlowbiteTheme } from "flowbite-react";

export const theme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      inner:
        'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700',
    },
  },
  modal: {
    content: {
      inner: 'relative bg-white rounded-lg shadow dark:bg-gray-800',
    },
  },
}
