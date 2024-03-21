# 개발 환경

- Nodejs - ^20v
- Pnpm - ^8v
- React - ^18v
- Vite - ^5v
- Zustand - ^4v
- axios - ^1v

- json-server

## Extension

- ( [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) )

<br/>

# 공통 컴포넌트 사용 방법

- Modal: check: 확인 눌렀을 때 true 취소 눌렀을때 false를 반환.

```js
const { openConfirmModal } = useConfirmModalStore();

const handleLogin = () => {
  openConfirmModal({ message: "되니?" }).then(
    (check) => check && console.log("모달 테스트")
  );
};
```
