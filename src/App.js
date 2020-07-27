import React from 'react';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import datas from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{ background:"#141414" }}>
      <Menu />
      {
        datas.categorias.map((data, index) => {
          const { url, titulo } = data.videos[0];

          return (
            <div>
              {/* {
                index === 0 && (<BannerMain url={url} videoTitle={titulo} videoDescription={titulo} />)
              } */}
              <BannerMain url={url} videoTitle={titulo} videoDescription={titulo} />
              <Carousel ignoreFirstVideo={index === 0 ? true : false} category={data} />
            </div>
          )
        })
      }

      <Footer />
    </div>
  );
}

export default App;
