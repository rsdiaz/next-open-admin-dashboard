import appConfig from '@/config/appConfig'
import AuthLayout from '@/layout/auth-layout'
import SignInForm from '@/components/forms/sign-in-form'
import { FormProvider, useForm } from 'react-hook-form'
import ForgotPasswordForm from '@/components/forms/forgot-password-form'

const ForgotPassword = () => {
  const methods = useForm()

  return (
    <AuthLayout appConfig={appConfig} title="Forgot your password?">
      <p className="font-normal text-gray-500 dark:text-gray-400">
        Don't fret! Just type in your email and we will send you a code to reset
        your password!{' '}
      </p>
      <FormProvider {...methods}>
        <ForgotPasswordForm />
      </FormProvider>
    </AuthLayout>
  )
}

export default ForgotPassword
