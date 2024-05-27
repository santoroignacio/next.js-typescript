"use client";

//import { z } from "zod";
//import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { POST } from "../api/users/route";
//import { Button } from "@/components/ui/button";
//import { Form, } from "@/components/ui/form";
//import { IUser, zodUserSchema } from "@/models/users";
//import { InputFrom, PasswordInputFrom } from "./formInput";
//import { newUser } from "@/actions";
//import { useToast } from "../ui/use-toast";

const RegisterFrom = () => {
 /*  const { toast } = useToast()
  const form = useForm<IUser>({
    resolver: zodResolver(zodUserSchema),
  });
 */
  /* async function onSubmit(values: z.infer<typeof zodUserSchema>) {
    try {
      const response = await newUser(values)
      console.log('response', response)
      const asd = JSON.parse(response.data)
      console.log('asd', asd)
      return toast({
        title: response.message,
        variant: "success",
      })
    } catch (error) {
      return toast({
        title: "Hubo un error",
        variant: "destructive",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    }
  } */

  //const { handleSubmit, control } = form

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='w-full max-w-3xl rounded-lg p-6 shadow-lg bg-white'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold text-center'>Registro</h2>
            <form /* onSubmit={} */ className="flex flex-col items-stretch" >
              <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
                <label>Nombre Usuario</label>
                <input
                  //control={control}
                  name='username'
                  placeholder='NachoDoe'
                  type="text"
                />
                <label>Email</label>
                <input
                  //control={control}
                  name='email'
                  placeholder='juan.doe@gmail.com'
                  type="email"
                />
                <label>Password</label>
                <input
                  //control={control}
                  name='password'
                  placeholder='***'
                  type="password"
                  
                />
                <label>Ciudad</label>
                <input
                  //control={control}
                  name='ciudad'
                  type="text"
                  
                />
                
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
