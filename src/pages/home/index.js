import React from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import datas from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background:"#141414" }}>
      <PageDefault showButton>
        {
          datas.categorias.map((data, index) => {
            const { url, titulo } = data.videos[0];

            return (
              <>
                {/* {
                  index === 0 && (<BannerMain url={url} videoTitle={titulo} videoDescription={titulo} />)
                } */}
                {/* <Carousel ignoreFirstVideo={index === 0 ? true : false} category={data} /> */}
                <BannerMain url={url} videoTitle={titulo} videoDescription={titulo} />
                <Carousel ignoreFirstVideo={true} category={data} />
              </>
            )
          })
        }
      </PageDefault>
    </div>
  );
}

export default Home;
