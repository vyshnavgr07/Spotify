import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export  async function middleware(req) {
    const token=await getToken({req,secret:process.env.SECRET})
    
    const {pathname}=req.nextUrl
    if(pathname.include("/api/auth") || token){
        return NextResponse.next()
    }

    if(!token && pathname !="/login"){
    return NextResponse.redirect(new URL('/login', req.url))    }

    return NextResponse.next()

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}