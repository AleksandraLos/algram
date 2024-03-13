import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SiguUpValidationSchema } from "@/lib/validation"
import Logoipsum from '@/assets/logoipsum-289.svg'
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"

export const SignupForm = () => {

  const isLoading = false;
   // 1. Define your form.
   const form = useForm<z.infer<typeof SiguUpValidationSchema>>({
    resolver: zodResolver(SiguUpValidationSchema),
    defaultValues: {
      name:"",
      username: "",
      email:"",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SiguUpValidationSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col"><img src={Logoipsum} alt="Logo" /><h2 className="h3-bold md:h2-bold pt-5 sm:pt12">Create a new accout</h2><p className="text-light-3 small-medium md:base-regular">To use snapgram entre your account details.</p>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name :</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Enter your name" className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      />
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username :</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Enter your username" className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      />
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email :</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Enter your email" className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      />
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password: :</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Enter your password" className="shad-input"{...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      />
      <Button type="submit" className="shad-button_primary">{isLoading ? (<div className="flex-center gap-2"><Loader/>Loading . . .</div>): "Sign up"}</Button>
    <p className="text-small-regular text-light-2 mt-2 text-center">Alredy have an accout? <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link> </p>
    </form>
    </div>
  </Form>
  
  
  )
}
