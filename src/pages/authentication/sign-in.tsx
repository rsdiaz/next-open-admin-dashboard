import appConfig from '@/config/appConfig'
import { Button, Label, TextInput } from 'flowbite-react'

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
      <a
        href=""
        className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
      >
        <img src={appConfig.logoUrl} className="mr-4 h-11" alt="Logo" />
        <span>{appConfig.appName}</span>
      </a>
      <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sign in to platform
        </h2>
        <form className="mt-8 space-y-6" action="#">
          <div>
            <Label htmlFor="email1" value="Your email" className="block mb-2" />
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Your password"
              className="block mb-2"
            />
            <TextInput
              id="password"
              type="password"
              placeholder="******"
              required={true}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-900 dark:text-white"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-500 hover:underline dark:text-primary-500"
            >
              Lost Password?
            </a>
          </div>
          <Button type="submit" size="md">
            Login to your account
          </Button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Not registered?{' '}
            <a className="text-blue-500 hover:underline dark:text-primary-500">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
