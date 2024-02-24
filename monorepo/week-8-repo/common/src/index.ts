import { z }  from "zod";

export const userSignUp = z.object({
    username: z.string(),
    password: z.string()
});

console.log("Hi there");

export type SignUpParams = z.infer<typeof userSignUp>;