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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


---
$ npx create-next-app@latest
√ What is your project named? ... my-next-app
√ Would you like to use TypeScript? ... No // typescript akan dibahas nanti
√ Would you like to use ESLint? ...  Yes
√ Would you like to use Tailwind CSS? ...  Yes // no jika kurang familiar dengan tailwind
√ Would you like to use `src/` directory? ...  Yes // biar rapi
√ Would you like to use App Router? (recommended) ... No // app router masih jarang digunakan
√ Would you like to customize the default import alias (@/*)? ... No // menggunakan url yg umumnya dlu


---
```bush
npm install mongoose
```

```js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const Post = mongoose.model('Post', new mongoose.Schema({
  title: String,
  content: String,
}));
```

untuk test
endpoint
http://localhost:3000/api/blogs/create
method: post
data:
{
"title":"nama lengkap",
"content":"deskripsi singkat (siapa anda ketika ditanya)"
}

discreenshot hasilnya dan disimpan di folder screenshot



