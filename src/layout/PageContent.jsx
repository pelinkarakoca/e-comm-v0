import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function PageContent({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
