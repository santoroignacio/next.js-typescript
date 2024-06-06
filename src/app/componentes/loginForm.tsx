"use client";

import { zodUserSchema } from "@/validations/userShemaZod";
import handleZodError from "@/validations/handleZodError";
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILogin, loginSchemaZod } from "@/validations/loginShemaZod";


export const LoginForm = () => {

  const form = useForm<ILogin>({
    resolver: zodResolver(loginSchemaZod),
  });

  //ver si email existe para ingresar

  async function onSubmit(values: z.infer<typeof loginSchemaZod>) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
    }
    catch (error: any) {
     /*  const formattedErr = handleZodError(error)
      console.error(formattedErr) */
      console.log('No se pudo ');
    }
  }

  const { register, handleSubmit } = form
  const { formState: { errors } } = form;

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input {...register("emailUsuario")} name="emailUsuario" type="email" placeholder="JPerez@gmail.com" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <div>
              <span className="text-rose-600 text-xs d-block mb-2">
                {errors.emailUsuario && errors.emailUsuario.message}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input {...register("passwordUsuario")} name="passwordUsuario" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <div>
              <span className="text-rose-600 text-xs d-block mb-2">
                {errors.passwordUsuario && errors.passwordUsuario.message}
              </span>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        </p>
      </div>
    </div>
  )
}