import Image from 'next/image';
import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';

const ArticleCard = () => {
    return (
        <article className="p-5">
            <div className="flex gap-x-5">
                <div className="w-3/4 space-y-2">
                    <BaseLink className="block">
                        <h2 className="text-lg font-bold dark:text-white md:text-2xl">2024 資深前端工程師面試心得</h2>
                    </BaseLink>
                    <div className="space-x-3 font-serif">
                        <span>2024-11-13</span>
                        <span>__</span>
                        <span>
                            <BaseLink>Frontend</BaseLink>
                        </span>
                    </div>
                    <h3
                        className="line-clamp-2 text-base/7"
                        title="最近對 React 底層 re-render 機制有很大突破的認識，連以前想不透的 bug
                都突然茅塞頓開想通了！本來標題為 Deep dive React
                re-render，但寫一寫發現篇幅實在太長，就決定把其中重要的概念
                Reconciliation 拆出先發佈在這篇， 其他步驟則會在 Deep dive React
                re-render 再分享。"
                    >
                        最近對 React 底層 re-render 機制有很大突破的認識，連以前想不透的 bug
                        都突然茅塞頓開想通了！本來標題為 Deep dive React
                        re-render，但寫一寫發現篇幅實在太長，就決定把其中重要的概念 Reconciliation 拆出先發佈在這篇，
                        其他步驟則會在 Deep dive React re-render 再分享。
                    </h3>
                </div>
                <div className="w-1/4">
                    <Image
                        src="/assets/projects/chinese-number-format.avif"
                        className="mx-auto h-[53px] w-20 object-cover md:h-[107px] md:w-40"
                        width={160}
                        height={107}
                        alt=""
                    />
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;
