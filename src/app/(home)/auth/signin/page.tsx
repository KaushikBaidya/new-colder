"use client";
import Link from "next/link";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const SignIn: React.FC = () => {
	return (
		<div className="container mx-auto flex items-center justify-center min-h-screen sm:px-6 lg:px-8">
			<div className="w-full max-w-md p-8 space-y-3 rounded-xl text-gray-800">
				<h1 className="text-3xl font-bold text-center flex items-center justify-center gap-5">
					Sign In
				</h1>
				<form noValidate className="space-y-6">
					<div className="space-y-1 text-lg">
						<label htmlFor="username" className="block text-gray-600">
							Username
						</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
						/>
					</div>
					<div className="space-y-1 text-lg">
						<label htmlFor="password" className="block text-gray-600">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
						/>
						<div className="flex justify-end text-xs text-gray-600">
							<Link href="/forgot-password">
								<p className="hover:underline">Forgot Password?</p>
							</Link>
						</div>
					</div>
					<button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600 hover:bg-violet-700">
						Sign in
					</button>
				</form>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
					<p className="px-3 text-lg text-gray-600">
						Login with social accounts
					</p>

					<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
				</div>
				<div className="flex justify-center space-x-4">
					<div className="">
						<FaGoogle size={30} />
					</div>
					<div className="">
						<FaGithub size={30} />
					</div>
				</div>
				<div className="text-sm text-center sm:px-6 text-gray-600">
					Don't have an account?{" "}
					<Link href="/signup">
						<p className="underline text-gray-800">Sign up</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
