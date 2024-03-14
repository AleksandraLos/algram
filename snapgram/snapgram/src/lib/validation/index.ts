import * as z from "zod"

export const SiguUpValidationSchema = z.object({
    name: z.string().min(2,{message:"Name is to short. Try again"}),
    username: z.string().min(2,{message:'To short username. Try again.'}),
    email: z.string().email(),
    password :z.string().min(8, {message:'Passwordd is to short. Password must be at least 8 characters'})

  })