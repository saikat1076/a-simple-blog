import Link from "next/link"
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";



const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="bg-gray-900 text-white">
            <nav className="flex justify-between container mx-auto sm:w-11/12 py-5">
                <h1 className="text-3xl font-bold">A Blogs</h1>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href='/profile'>Profile</Link>
                    </li>
                    {
                        user ? <>

                            <li>
                                <LogoutLink>Logout</LogoutLink>
                            </li>
                        </> : <>
                            <li>
                                <LoginLink>Login</LoginLink>
                            </li>

                        </>
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
