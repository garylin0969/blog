import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合併 Tailwind CSS 類名。
 *
 * 結合了 `clsx` 的條件類名處理和 `tailwind-merge` 的衝突解決功能。
 *
 * @param inputs - 要合併的類名列表，可以是字串、物件或陣列。
 * @returns 合併後的類名字符串。
 */
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
