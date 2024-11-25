import * as v from "valibot";

// Define the validation schema for signup
export const SignupValidator = v.pipe(
	v.object({
		// The `name` field is optional
		name: v.optional(
			v.union([
				// Case 1: The name can be an empty string
				v.pipe(
					v.literal(""), // Allow an empty string
					v.transform(() => undefined) // Transform empty string to `undefined`
				),
				// Case 2: The name must be a valid string meeting certain criteria
				v.pipe(
					v.string("Your name must be a string"), // Ensure it's a string
					v.nonEmpty("Please enter your name"), // Ensure it's not empty
					v.minLength(4, "Your name must be at least 4 characters long") // Minimum length is 4 characters
				),
			])
		),
		// The `email` field is required and must follow email formatting rules
		email: v.pipe(
			v.string("Your email must be a string"), // Ensure it's a string
			v.nonEmpty("Please enter your email"), // Ensure it's not empty
			v.email("The email address in badly formatted") // Ensure it's a valid email
		),
		// The `password` field is required and must meet certain criteria
		password: v.pipe(
			v.string("Your password must be a string"), // Ensure it's a string
			v.nonEmpty("Please enter your password"), // Ensure it's not empty
			v.minLength(6, "Your password must be at least 6 characters long") // Minimum length is 6 characters
		),
		// The `confirmPassword` field is required but does not have length requirements
		confirmPassword: v.pipe(
			v.string("Your password must be a string"), // Ensure it's a string
			v.nonEmpty("Please enter your password") // Ensure it's not empty
		),
	}),
	// Add custom logic to ensure that `password` and `confirmPassword` match
	v.forward(
		// Use `partialCheck` to validate specific fields
		v.partialCheck(
			[["password"], ["confirmPassword"]], // Fields to compare
			(input) => input.password === input.confirmPassword, // Check if the passwords match
			"Your passwords do not match" // Error message if they don't
		),
		["confirmPassword"] // Only `confirmPassword` will be removed if the check fails
	)
);

export type SignupInput = v.InferInput<typeof SignupValidator>;
