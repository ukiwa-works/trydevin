import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <main>
        <h1>Welcome to the Application</h1>
        <p>
          This is the foundation of a Next.js application with App Router and server-side actions.
        </p>

        <nav style={{ marginTop: "2rem" }}>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "1rem" }}>
              <Link href="/login" style={{ color: "#0070f3", textDecoration: "underline" }}>
                Go to Login Page
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
