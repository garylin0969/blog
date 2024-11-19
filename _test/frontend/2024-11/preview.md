---
category: 'Frontend'
title: '[台灣 vs 美國] 2023 產假福利大比拼，以及手把手申請加州 EDD 產假'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2024-12-16T05:35:07.322Z'
author:
    name: Joe Haddad
    picture: '/assets/blog/authors/joe.jpeg'
ogImage:
    url: '/assets/blog/preview/cover.jpg'
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.

# GSAP 參考指南

## 基本動畫屬性

-   `x`: 100 // X 軸位移
-   `y`: 50 // Y 軸位移
-   `rotation`: 360 // 旋轉角度
-   `scale`: 1.5 // 縮放
-   `opacity`: 0.5 // 透明度
-   `backgroundColor`: "#ff0000" // 背景顏色
-   `width`: "100px" // 寬度
-   `height`: "100px" // 高度

## 時間控制

-   `duration`: 2 // 動畫持續時間（秒）
-   `delay`: 1 // 延遲開始時間
-   `repeat`: 2 // 重複次數 (-1 為無限重複)
-   `repeatDelay`: 1 // 每次重複之間的延遲
-   `yoyo`: true // 是否來回播放

## 緩動函數 (Easing)

-   `ease`: "power1.inOut" // 內建緩動
-   `ease`: "elastic.out(1, 0.3)" // 彈性動畫
-   `ease`: "bounce.out" // 彈跳效果
-   `ease`: "steps(12)" // 步進動畫

## 回調函數

-   `onStart`: () => console.log("動畫開始")
-   `onUpdate`: () => console.log("動畫更新中")
-   `onComplete`: () => console.log("動畫完成")
-   `onRepeat`: () => console.log("動畫重複")

## 隨機值與函數

-   `x`: "random(-100, 100)" // 隨機值
-   `rotation`: "random([0, 90, 180, 270])" // 隨機數組
-   `scale`: () => Math.random() \* 2 // 函數返回值

## 變形相關

-   `transformOrigin`: "left center" // 變形原點
-   `skewX`: 45 // X 軸傾斜
-   `skewY`: 45 // Y 軸傾斜

## 特殊控制

-   `paused`: true // 創建時暫停
-   `immediateRender`: true // 立即渲染第一幀
-   `overwrite`: "auto" // 覆蓋規則
-   `stagger`: { // 序列動畫
    -   `amount`: 1 // 總時間
    -   `from`: "start" // 起始位置
    -   `each`: 0.1 // 每個元素的延遲
        }

## SVG 特定屬性

-   `fill`: "#ff0000" // 填充顏色
-   `stroke`: "#000000" // 描邊顏色
-   `strokeWidth`: 2 // 描邊寬度
-   `drawSVG`: "0% 100%" // SVG 繪製動畫

## TextPlugin 屬性

-   `text`（需要 TextPlugin）：
    -   **作用**：定義元素的文本內容。
    -   **範例**：`text: 'Hello, World!'` 表示將元素的文本內容設置為 'Hello, World!'。

---

## 實用範例

### 基礎動畫組合

```javascript
<div className="prose dark:prose-invert">
    <div dangerouslySetInnerHTML={{ __html: content }} />
</div>
```

### 序列動畫

```javascript
gsap.to(elements, {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: {
        each: 0.2,
        from: 'start',
    },
});
```

### 複雜動畫組合

```javascript
gsap.to(element, {
    duration: 2,
    x: 200,
    rotation: 360,
    scale: 1.5,
    ease: 'elastic.out(1, 0.3)',
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,
    onRepeat: () => console.log('重複播放'),
});
```

### 說明

1. **基本動畫屬性**：列出了常用的動畫屬性，如位移、旋轉、縮放、透明度等。
2. **時間控制**：介紹了控制動畫時間的屬性，如持續時間、延遲、重複次數等。
3. **緩動函數 (Easing)**：列出了常用的緩動效果。
4. **回調函數**：介紹了動畫過程中的回調函數，如開始、更新、完成、重複等。
5. **隨機值與函數**：介紹了如何使用隨機值和函數來設置動畫屬性。
6. **變形相關**：介紹了變形相關的屬性，如變形原點、傾斜等。
7. **特殊控制**：介紹了特殊控制屬性，如暫停、立即渲染、覆蓋規則、序列動畫等。
8. **SVG 特定屬性**：列出了 SVG 動畫中特有的屬性。
9. **TextPlugin 屬性**：介紹了 [`TextPlugin`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fgarylin%2FDesktop%2FGitHub%2Fblog-starter-app%2Fdocs%2Fgsap-reference.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A8%7D%7D%5D%2C%221ef9ccc6-5afa-4d07-9915-e1aa8a7fba04%22%5D 'Go to definition') 的使用方法。
10. **實用範例**：提供了一些常見的動畫組合範例。

這樣的設計可以使文檔結構更加清晰，方便查閱和使用。
