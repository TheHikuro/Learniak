import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    async function middleware(req) {
        if (req.nextUrl.pathname.startsWith('/teachers') && req.nextauth.token?.role !== "teachers") {
            return NextResponse.rewrite(
                new URL('/?message=You are not authorized to access this page', req.url)
            )
        }
    },
    {
        callbacks: {
            // authorized: ({ token }) => token?.role === "admin",
        },

    }
)

export const config = { matcher: ["/quizz"] }