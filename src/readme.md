## 🪅 Pre-install

在使用Emoji-Mart-Vue3之前，需要先安装`emoji-mart`。

**Emoji Mart安装方法**

```bash
npm install emoji-mart  // emoji-mart本体
npm install @emoji-mart/data  // emoji-mart数据
```

## 🪅 安装

```bash
[npm] npm install emoji-mart-vue3
[yarn] yarn add emoji-mart-vue3
[pnpm] pnpm add emoji-mart-vue3
```

## 🪅 引入

`main.ts`

```typescript
import EmojiMartPicker from 'emoji-mart-vue3'
app.use(EmojiMartPicker)
```

## 🪅 使用

```vue
<EmojiMartPicker :data="data" />
```
