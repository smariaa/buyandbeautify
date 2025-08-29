import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import logo from "../../img/logo.png";

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-pink-200 pt-6 sm:justify-center sm:pt-0">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div> */}
            <div className="mb-6">
                <img
                    src={logo}
                    alt="buy&beautify"
                    className="h-20"
                />
            </div>

            <div className="mt-6 w-full overflow-hidden bg-pink-500 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
