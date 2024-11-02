import z from "zod";

const checkoutShema = z.object({
  firstName: z
    .string()
    .min(1, { message: "firstName is required" })
    .max(10, { message: "firstName has a maximum size" }),
  lastName: z
    .string()
    .min(1, { message: "lastName" })
    .max(10, { message: "lastName has a maximum size" }),
  email: z.string().email(),
  country: z
    .string()
    .min(1, { message: "Country is required" })
    .max(10, { message: "Country has a maximum size" }),
  street: z
    .string()
    .min(1, { message: "Street is required" })
    .max(30, { message: "Street has a maximum size" }),
  zipCode: z
    .string()
    .min(1, { message: "Zip code  is required" })
    .max(10, { message: "Zip code has a maximum size" }),
  phone: z
    .string()
    .min(1, { message: "Phone is required" })
    .max(13, { message: "Phone has maximum size" }),
  city: z
    .string()
    .min(1, { message: "City is required" })
    .max(20, { message: "City has maximum size"}),
});

type checkoutType = z.infer<typeof checkoutShema>;
export { type checkoutType, checkoutShema };
