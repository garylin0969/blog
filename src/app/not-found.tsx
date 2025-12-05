import Link from 'next/link';
import { Button } from '@/components/ui/button';

/**
 * 404 頁面元件。
 *
 * 當使用者訪問不存在的頁面時顯示。
 */
const NotFound = () => {
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="space-y-4 text-center">
                <h2 className="text-9xl font-black">404</h2>
                <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
                <p>We can&apos;t find that page</p>
                <Link href="/">
                    <Button>Back to Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
