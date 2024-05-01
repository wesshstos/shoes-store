import Banner from "./components/Banner";
import Header from "./components/Header";
import imgBanner from "./assets/jordans/bg.jpg";
import AreaCard from "./components/AreaCard";

export default function App() {
  return (
    <>
      <Header />
      <Banner
        tittle="Dev's Shoes Store - DSS"
        image={imgBanner}
        subtittle="A melhor loja de tênis da Baixada Santista"
      />
      <AreaCard />
    </>
  );
}
