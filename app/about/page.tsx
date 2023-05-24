import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">Return Home</Link>
      <Link href="/about/company">Company</Link>
    </div>
  );
};

export default Page;
