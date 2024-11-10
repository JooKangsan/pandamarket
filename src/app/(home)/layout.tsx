import Footer from './_components/Footer';
import Header from './_components/Header';

function HomeRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mb-[100px] mt-[60px] flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default HomeRootLayout;