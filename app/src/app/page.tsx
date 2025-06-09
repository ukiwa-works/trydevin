import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full space-y-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Welcome to TryDevin
					</h1>
					<p className="text-gray-600 mb-8">
						Next.js App Router with Server Actions
					</p>
					<Link
						href="/login"
						className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						ログインページへ
					</Link>
				</div>
			</div>
		</div>
	);
}
