This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- Các bước chuẩn bị

- B1: Xóa toàn bộ thẻ div bên trong thẻ main trong page.js (trong thư mục app)

```jsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Next JS Course 2024</h1>
    </main>
  );
}
```

- B2: Xóa các css trong thẻ body (trong file global.css)

# server component by default
# use client component to state management by adding 'use client' to top
- Example

```jsx
'use client'

import { useState } from "react";

// server component by default
// use client component to state management by adding 'use client' to top
export default function Home() {
  const [value, setValue] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Next JS Course 2024</h1>
    </main>
  );
}
```

### Kết luận từ bài Client and server component trong Nextjs

- Mặc định page.js là server component, muốn sử dụng các state thì phải thêm 'use-client' để chuyển đổi thành client component
- Server Components: Được render trên server và có thể truy cập vào các tính năng như dữ liệu từ cơ sở dữ liệu hoặc API mà không cần phải gửi đến client. Chúng giúp giảm tải công việc cho client và cải thiện hiệu suất.
- Client Components: Được render trên client và thường được sử dụng cho các phần của ứng dụng cần tương tác người dùng hoặc các tính năng động mà không thể thực hiện trên server.
- Tích hợp hai loại components: Next.js cho phép kết hợp cả Server Components và Client Components trong cùng một ứng dụng. Điều này giúp tối ưu hóa hiệu suất bằng cách sử dụng Server Components để xử lý các phần tĩnh và Client Components để xử lý các phần động và tương tác người dùng.
- Lợi ích: Việc phân chia này giúp giảm lượng dữ liệu cần tải xuống client, cải thiện thời gian tải trang và hiệu suất tổng thể của ứng dụng.
- Thực tiễn tốt nhất: Sử dụng Server Components cho các phần tĩnh hoặc có logic phức tạp và Client Components cho các phần cần tương tác và cập nhật liên tục từ phía người dùng.
- Tóm lại, sự kết hợp thông minh giữa Server Components và Client Components trong Next.js giúp cải thiện hiệu suất và trải nghiệm người dùng.