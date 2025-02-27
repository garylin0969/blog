import { redirect } from 'next/navigation';

const page = () => {
    redirect('/blog/all');
};

export default page;
