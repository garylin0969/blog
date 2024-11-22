import Link from 'next/link';
import { BaseButton } from '@/components/atoms/button';

const NotFound = () => {
    return (
        <div className="grid h-full place-content-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
                <p className="mt-4 text-gray-500">We can't find that page.</p>
                <Link href="/">
                    <BaseButton className="mt-6">Go Back Home</BaseButton>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
