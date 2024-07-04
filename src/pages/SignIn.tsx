import { Button } from '@shadcn-ui/button';
import { API_URL } from '@utils/index';
import { useState } from 'react';
import { useToast } from '@shadcn-ui/use-toast';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  username: string,
  password: string
}

export default function SignIn() {

  const [loginSuccess, setLoginSuccess] = useState(false)
  const { toast, toasts } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const form = new FormData()

    form.append("username", data.username)
    form.append("password", data.password)

    const response = await fetch(`${API_URL}/signin`,
      {
        method: "POST",
        body: form
      });

    if (!response.ok) {
      throw Error("Error: " + response.body)
    }

    const response_data = await response.json()

    setLoginSuccess(true)


  }



  return (
    <div className="h-dvh flex flex-col items-center justify-center bg-gray-50">
      <form id="SignInForm" onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 min-w-fit w-3/12 p-6
        border-[1px] border-gray-400 rounded-sm"
      >
        <label htmlFor="username" className="flex flex-col gap-y-2">
          <span>UserName</span>
          <input id="username"
            {...register("username", { required: true })}
            className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
          {errors.username && <span className="text-red-500">This field is required</span>}
        </label>
        <label htmlFor="password" className="flex flex-col gap-y-2">
          <span>Password</span>
          <input id="password"
            {...register("password", { required: true })}
            className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
          {errors.password && <span className="text-red-500">This field is required</span>}
        </label>
        <Button type='submit'>SignIn</Button>
      </form>
    </div >
  );
}