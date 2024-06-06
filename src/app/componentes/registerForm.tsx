"use client";

import { IUser } from "@/validations/userShemaZod"
import { zodUserSchema } from "@/validations/userShemaZod";
import handleZodError from "@/validations/handleZodError";
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const RegisterFrom = () => {

  const form = useForm<IUser>({
    resolver: zodResolver(zodUserSchema),
  });



  async function onSubmit(values: z.infer<typeof zodUserSchema>) {

    //registro el usuario
    try {
      const response = await fetch('/api/users', {
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
      const formattedErr = handleZodError(error)
      console.error(formattedErr)
    }
  };
  const { register, handleSubmit } = form
  const { formState: { errors } } = form;


  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='w-full max-w-3xl rounded-lg p-6 shadow-lg bg-white'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-center'>Registro</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-stretch" >
            <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
              <label>Nombre Usuario</label>
              <div>
                <div>
                  <input
                    {...register("nombreUsuario")}
                    name='nombreUsuario'
                    placeholder='JhonDoe'
                    type="text"

                  />
                  <div>
                    <div>
                      <span className="text-rose-600 text-xs d-block mb-2">
                        {errors.nombreUsuario && errors.nombreUsuario.message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <label>Email</label>
              <div>
                <div>
                  <input
                    {...register("emailUsuario")}
                    name='emailUsuario'
                    placeholder='Jhondoe@gmail.com'
                    type="email"
                  />
                </div>
                <div>
                  <span className="text-rose-600 text-xs d-block mb-2">
                    {errors.emailUsuario && errors.emailUsuario.message}
                  </span>
                </div>
              </div>
              <label>Password</label>
              <div>
                <div>
                  <input
                    {...register("passwordUsuario")}
                    name='passwordUsuario'
                    placeholder='***'
                    type="password"
                  />
                  <div>
                    <span className="text-rose-600 text-xs d-block mb-2">
                      {errors.passwordUsuario && errors.passwordUsuario.message}
                    </span>
                  </div>
                </div>
              </div>
              <label>Ciudad</label>
              <div>
                <div>
                  <input
                    {...register("ciudadUsuario")}
                    name='ciudadUsuario'
                    placeholder='Buenos Aires'
                    type="text"
                  />
                  <div>
                    <span className="text-rose-600 text-xs d-block mb-2">
                      {errors.ciudadUsuario && errors.ciudadUsuario.message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button className="self-center w-6/12" type='submit'>
              Crear
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};
export default RegisterFrom;
