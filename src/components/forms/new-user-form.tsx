/** @core imports */
import Label from '@/@core/ui/label'
import Input from '../../@core/ui/input'

/** React Hook Form */
import { SubmitHandler, useForm } from 'react-hook-form'
import { useEffect } from 'react'

type FormValues = {
  firstName: string
  lastName: string
  email: string
  position: string
  biography: string
}

const NewUserForm = () => {
  const { register, handleSubmit, watch, reset, formState } =
    useForm<FormValues>()

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <Label htmlFor="firstName">First Name</Label>
            <Input {...register('firstName')} placeholder="Boonie" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Label htmlFor="lastName">Last Name</Label>
            <Input {...register('lastName')} placeholder="Green" required />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register('email')}
              placeholder="example@company.com"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <Label htmlFor="position">Position</Label>
            <Input
              {...register('position')}
              placeholder="e.g. React developer"
              required
            />
          </div>
          <div className="col-span-6">
            <Label htmlFor="biography">Biography</Label>
            <textarea
              {...register('biography')}
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="👨‍💻Full-stack web developer. Open-source contributor."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Add user
        </button>
      </div>
    </form>
  )
}

export default NewUserForm
