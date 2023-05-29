import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
}; */

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  // Get the Dicitionary based on Lang
  const dicitionary = await getDictionary(lang);

  return {
    title: "Explorer",
    description: dicitionary.footer.description,
  };
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        {/* @ts-expect-error Async Server Component */}
        <Navigation locale={lang} />
        <div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
        {/* @ts-expect-error Async Server Component */}
        <Footer locale={lang} />
      </body>
    </html>
  );
}
