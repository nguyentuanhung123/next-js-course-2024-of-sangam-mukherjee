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

### Nested Route trong Nextjs 14 : Tạo các thư mục con và bê trong mỗi thư mục con có một file là page.js

### Dynamin Route trong Nextjs 14 : Tạo 1 trang chi tiết sản phẩm 

- B1: Tạo 1 thư mục bên trong thư mục products có tên bất kỳ đặt trong dấu [], ví dụ: [details]
- B2: Tạo một file là page.js trong thư mục [details]
- B3: Để truy cập đến đó: http://localhost:3000/products/2

### Catch-all routes : Catch-all routes trong Next.js cho phép bạn tạo các đường dẫn linh hoạt, có thể bao phủ nhiều cấp độ đường dẫn mà không cần định nghĩa cụ thể từng cấp độ. Điều này rất hữu ích cho việc xử lý các trường hợp mà bạn không biết trước cấu trúc đường dẫn.

- Nếu ta gõ đường dẫn như : http://localhost:3000/products/2/32/5 -> Nó sẽ không hoạt động

# Để có thể bắt được tất cả như trên ta phải sử dụng cú pháp với ba dấu chấm (...) bên trong dấu ngoặc vuông để tạo ra một catch-all route

- B1: Tạo 1 thư mục là [...product-review] bên trong thư mục products
- B2: Tạo một file là page.js trong thư mục [...product-review]
- B3: Khi ta truy cập http://localhost:3000/products/2/64/21/beqg -> Nó sẽ chạy file page.js vừa tạo đó.

### Navigate using next/link (Không có dấu '/' cũng được)

```jsx
import Link from "next/link";

<div>
  <Link href={'products'}>Navigate to products page</Link>
  <Link href={'/accounts'}>Navigate to accounts page</Link>
</div>
```

### Navigate using useRouter Hook

- B1: Chuyển đổi server component mặc định thành client component bằng cách thêm : 'use client' đặt trên đầu
- B2: Import useRouter

```jsx
import { useRouter } from "next/navigation";
const router = useRouter();

console.log("Router: ", router); // Router:  {back: ƒ, forward: ƒ, prefetch: ƒ, replace: ƒ, push: ƒ, …}
```

- B3: Chuyển đến trang products (Không có dấu '/' cũng được)

```jsx
function navigateToProducts() {
  router.push('/products');
}

<h2 className="font-bold mt-3 text-lg">Alternative Way of navigating using useRouter</h2>
<button onClick={navigateToProducts}>Navigate to products page using use router</button>
```

### Redirect in server components

- Ta biết rằng ta không thể sử dụng useRouter trong server component và cũng không thể sử dụng thẻ Link do thẻ Link chỉ có thể kích hoạt khi click vào
- Ở accounts page, nếu giả sử userProfileInfo = null thì ta muốn chuyển nó trực tiếp sang profile page

- B1: Tạo 1 thư mục trong app (cùng cấp với accounts) tên là profile
- B2: Tạo một file là page.js trong thư mục profile
- B3: Tạo một logic trong thư mục accounts để khi ta truy cập http://localhost:3000/accounts thì nó sẽ chuyển tới http://localhost:3000/profile

```jsx
import { redirect } from "next/navigation";

export default function Accounts() {

    // assume that profile info is null
    const userProfileInfo = null

    if (userProfileInfo === null) {
        redirect('profile')
    }

    return (
        <h1>Accounts page</h1>
    );
}
```

### useParams and useSearchParams
- Phải thêm 'use client' để có thể sử dụng useParams và useSearchParams
- Giả sử ta có đường dẫn là http://localhost:3000/cart?search=product1&radomValue=abcxyz

- Sử dụng useParams để lấy tên đường dẫn sau dấu '/'
- Sử dụng useSearchParams để lấy giá trị chi tiết của biến sau dấu '?'

```jsx
'use client'

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {

    const pathName = usePathname();
    console.log("pathName: ", pathName); // pathName:  /cart

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'), searchParams.get('radomValue')); // product1 abcxyz

    return (
        <div>
            <h1>This is Cart component.</h1>
        </div>
    );
}
```

## Giả sử ta muốn lấy thông tin chi tiết của một sản phẩm bất kỳ có đường dẫn như: http://localhost:3000/products/100

```jsx
export default function ProductDetails({ params }) {

    console.log("params: ", params); // params:  { details: '100' }

    return (
        <div>
            <h1>This is Product Details page</h1>
        </div>
    );
}
```

## Giả sử ta có đường dẫn là http://localhost:3000/products?search=product1

- Vấn đề xảy ra: Ở products page ta không thể sử dụng useParams và useSearchParams để lấy tên biến sau dấu '/' và chi tiết biến sau dấu '?' do products page là một server component mà không phải là client server
- Để có thể lấy chi tiết tên biến

```jsx
export default function Products({searchParams}) {

    // console.log("params on products page: ", params); // params on products page:  {}
    // console.log("searchParams on products page: ", searchParams); // searchParams on products page:  { search: 'product1' }
    console.log(searchParams.search) // product1

    return (
        <h1>Products page</h1>
    );
}
```

## Giả sử ta có đường dẫn là http://localhost:3000/products/1/2/3/4

- Để lấy tất cả đường dẫn ta đặt:

```jsx
export default function ProductReview({params}) {

    console.log(params); // { 'product-review': [ '1', '2', '3', '4' ] }

    return (
        <div>
            <h1>This is Product Review page and this is a catch all segment/route</h1>
        </div>
    );
}
```

### Loading UI on NextJS : https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming

- Vấn đề xảy ra: Khi ta có một thanh Navbar để chuyển hướng và khi chuyển hướng phải fetch data cho trang đó và nó cần thời gian nên ta phải thêm logic Loading UI

- B1: Tạo file loading.js trong thư mục app
- B2: Chỉnh sử ở file layout.js trong thư mục app.js

- Ban đầu:

```jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

- Thêm logic Loading UI

```jsx
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
```

### Custom 404 Page

- B1: Tạo 1 file là not-found.js trong thư mục app
- B2: Khai báo

```jsx
import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>This page does not exist</h1>
            <Link href={'/'}>Go back to home</Link>
        </div>
    )
}
```

### Data fetching

- B1: Tạo 1 thư mục là client-data-fetch
- B2: Tạo 1 thư mục là server-data-fetch
- B3: Lấy data vào trang dummy.json

## Data Fetching, Caching, and Revalidating

- Data Fetching là một phần cốt lõi của bất kỳ ứng dụng nào. Trang này trình bày cách bạn có thể tìm nạp, lưu vào bộ nhớ đệm và xác thực lại dữ liệu trong React và Next.js.

- There are four ways you can fetch data:

- On the server, with fetch
- On the server, with third-party libraries
- On the client, via a Route Handler
- On the client, with third-party libraries.

## Server Component
- Đây là chế độ mặc định của component trong Next.js

- Ưu điểm:

- Fetch data ở server => Nơi gần data center nên là sẽ nhanh hơn là fetch ở client => Giảm thiểu thời gian rendering, tăng UX
- Bảo mật: Server cho phép giữ các data nhạy cảm, logic đặc biệt không muốn public ở client
- Caching: Vì được render ở server nên có thể lưu giữ cache cho nhiều người dùng khác nhau => Không cần render trên mỗi request
- Bundle Size: Giảm thiểu JS bundle size vì client không cần tải về phần JS logic để render HTML
- Load trang lần đầu nhanh và chỉ số FCP (First Contentful Paint) thấp do người dùng sẽ thấy content ngay lập tức
- Search Engine Optimization and Social Network Shareability
- Streaming
=> Ưu tiên dùng Server Component khi có thể

## Fetching Data on the Server with fetch
- Next.js mở rộng API Web tìm nạp gốc để cho phép bạn cấu hình hành vi caching và revalidating cho từng yêu cầu tìm nạp trên máy chủ. React mở rộng fetch để tự động ghi nhớ các yêu cầu tìm nạp trong khi hiển thị cây thành phần React.

- Bạn có thể sử dụng fetch với async/await trong Server Components, trong Route Handlers và trong Server Actions.

## Caching Data

- Bộ nhớ đệm lưu trữ dữ liệu (Caching stores data) nên không cần phải tìm nạp lại dữ liệu từ nguồn dữ liệu của bạn theo mọi yêu cầu.

- Theo mặc định, Next.js tự động lưu trữ các giá trị fetch được trả về trong Data Cache trên server. Điều này có nghĩa là dữ liệu có thể được tìm nạp tại thời điểm xây dựng hoặc thời gian yêu cầu, được lưu vào bộ đệm và sử dụng lại trên mỗi yêu cầu dữ liệu.

```jsx
// 'force-cache' is the default, and can be omitted
fetch('https://...', { cache: 'force-cache' })
```

- Tuy nhiên, vẫn có những trường hợp ngoại lệ, yêu cầu tìm nạp không được lưu vào bộ đệm khi:

- Được sử dụng bên trong Server Action.
- Được sử dụng bên trong Route Handler sử dụng phương thức POST.

# Data Cache là gì?

- Data Cache là bộ đệm HTTP liên tục. Tùy thuộc vào nền tảng của bạn, bộ đệm có thể tự động mở rộng quy mô và được chia sẻ trên nhiều vùng.

## Revalidating Data

- Revalidation (Xác thực lại) là quá trình xóa Data Cache và tìm nạp lại dữ liệu mới nhất. Điều này rất hữu ích khi dữ liệu của bạn thay đổi và bạn muốn đảm bảo hiển thị thông tin mới nhất.

## SWR: https://swr.vercel.app/docs/getting-started

- B1: npm i swr