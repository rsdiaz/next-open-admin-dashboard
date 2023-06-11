import { Alert, Button, Label, TextInput } from 'flowbite-react'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

const ForgotPasswordForm = () => {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)
  const { register, handleSubmit, reset, formState } =
    useFormContext<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, password } = data

    const sigInStatus = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    setShowAlert(!sigInStatus?.ok)

    if (sigInStatus?.ok) {
      return router.push('/')
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="email1" value="Your email" className="block mb-2" />
        <TextInput
          {...register('email')}
          placeholder="name@yourcompany.com"
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
      </div>
      <Button type="submit" size="md">
        Reset password
      </Button>
      {showAlert && (
        <Alert
          color="failure"
          onDismiss={function onDismiss() {
            setShowAlert(false)
          }}
        >
          <span>
            <span className="font-medium">Upss!</span> Email or password is
            invalid
          </span>
        </Alert>
      )}
    </form>
  )
}

export default ForgotPasswordForm
