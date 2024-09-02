import * as z from "zod";

export const SignUpFormSchema = z.object({
    username: z.string().min(3, {message: "Username must be at least 3 characters"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8).refine((data)=>data.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),{message:"Password must contain at least one uppercase, one lowercase, one number and one special character"}),
    confirmPassword: z.string().min(8)
}).refine(
    (data) => data.password === data.confirmPassword,
    { 
        message: "Passwords do not match" 
    }
);

export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})


export const CreatePostSchema=z.object({
    title:z.string(),
    desc:z.string()
})

export const UpdateUserSchema=z.object({
    username:z.string(),
    email:z.string().email(),
})