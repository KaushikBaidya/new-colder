"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
	type SignupInput,
	SignupValidator,
} from "@/validators/signup-validator";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff } from "lucide-react";

const SignupForm = () => {
	const [showPassword, setShowPassword] = useState(false); // Toggle visibility for Password
	const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle visibility for Confirm Password

	const form = useForm<SignupInput>({
		resolver: valibotResolver(SignupValidator),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const { control, handleSubmit, formState } = form;

	const submit = async (values: SignupInput) => {
		console.log("values", values);
	};
	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={handleSubmit(submit)}
					className="max-w-[400px] space-y-4"
					autoComplete="false"
				>
					<FormField
						control={control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input type="text" placeholder="e.g. John Doe" {...field} />
								</FormControl>
								<FormDescription>Optional</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Email <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="e.g. example@me.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Password <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											type={showPassword ? "text" : "password"} // Dynamic input type
											placeholder="e.g. ********"
											{...field}
										/>
										<Button
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											className="absolute right-2 top-1/2 transform -translate-y-1/2"
											variant="ghost"
											size="sm"
										>
											{showPassword ? <EyeOff /> : <Eye />}
										</Button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Confirm Password <span className="text-red-500">*</span>
								</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											type={showConfirmPassword ? "text" : "password"} // Dynamic input type
											placeholder="e.g. ********"
											{...field}
										/>
										<Button
											type="button"
											onClick={() =>
												setShowConfirmPassword(!showConfirmPassword)
											}
											className="absolute right-2 top-1/2 transform -translate-y-1/2"
											variant="ghost"
											size="sm"
										>
											{showConfirmPassword ? <EyeOff /> : <Eye />}
										</Button>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						disabled={formState.isSubmitting}
						className="w-full"
						size="lg"
					>
						Sign Up
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default SignupForm;
