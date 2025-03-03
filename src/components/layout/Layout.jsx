import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1 py-8 flex justify-center items-center">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;