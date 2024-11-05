import Image from 'next/image';
import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';
import DividerTitle from '@/components/molecules/divider-title';

const src =
    'https://media.cakeresume.com/image/upload/s--5LjR-owY--/c_pad,fl_png8,h_100,w_100/v1553661159/zu0femq69mr3suhhjnze.png';

const href = 'https://www.cnyes.com';

const testArr = [1, 2, 3];

const AboutPage = () => {
    return (
        <Container>
            <div className="my-9">
                <InfoCard />
            </div>
            <AboutInfo />
            <DividerTitle align="center" title="Experience" />
            <div className="flex flex-col items-center">
                {testArr.map((num) => {
                    return (
                        <div key={num} className={cn('flex gap-4', 'max-w-xl', 'p-3')}>
                            <div className="">
                                <Image
                                    className="rounded border border-[#e2e6e4] bg-white"
                                    src={src}
                                    width={64}
                                    height={64}
                                    loading="lazy"
                                    alt="company-logo"
                                />
                            </div>
                            <div>
                                <div>
                                    <h4 className="text-lg font-semibold">Frontend Developer</h4>
                                </div>
                                <div className="mb-1">
                                    <a className="text-base" href={href} target="_blank" rel="noreferrer noopener">
                                        Anue 鉅亨網
                                    </a>
                                </div>
                                <div className="text-sm">
                                    <span>2024/03</span>
                                    <span> - </span>
                                    <span>現在</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default AboutPage;
