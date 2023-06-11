import appConfig from '@/config/appConfig'
import SignInForm from '@/components/forms/sign-in-form'
import { FormProvider, useForm } from 'react-hook-form'
import { getSession } from 'next-auth/react'
import { Spinner } from 'flowbite-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AuthLayout from '@/layout/auth-layout'

const SignIn = () => {
  const methods = useForm()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSession().then((session) => {
      console.log(session)
      if (session) {
        router.replace('/')
      } else {
        setLoading(false)
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
  }

  return (
    <AuthLayout appConfig={appConfig} title="Sign in to platform">
      <FormProvider {...methods}>
        <SignInForm />
      </FormProvider>
    </AuthLayout>
  )
}

export default SignIn
