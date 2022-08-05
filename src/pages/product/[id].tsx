import type { NextPage } from 'next';
import Head from 'next/head';
import ImageGallery from 'react-image-gallery';

export const getStaticPaths = async () => {
  const response = await fetch(
    'https://sickomozne.loumadev.eu/api/v1/product/dump',
    {
      headers: {
        Authorization: 'Bearer ' + process.env.PRODUCTS_DUMP_TOKEN,
      },
    }
  );
  const data = await response.json();
  const paths = data.products.map((item: any) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    'https://sickomozne.loumadev.eu/api/v1/product/' + id + '/info'
  );
  const data = await res.json();
  return {
    props: {
      product: data.product,
    },
  };
};

const ProductPage: NextPage = ({ ...props }: any) => {
  const handleImageDownload = (): any => {
    if (props.product.gallery) {
      const gallery = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
          sizes: '500px',
        },
      ];
      props.product.gallery.map((item: any) => {
        gallery.push({
          original: `${process.env.NEXT_PUBLIC_SERVER}/media/images/${item.id}/640.jpg`,
          thumbnail: `${process.env.NEXT_PUBLIC_SERVER}/media/images/${item.id}/160.jpg`,
          sizes: '500px',
        });
      });
      return gallery;
    }
  };
  return (
    <div>
      <Head>
        <title>{props.product.name}</title>
        <meta
          name={`${props.product.name} na SickoMozne.sk`}
          content={`${props.product.description} plus pridať nejaké SEO tagy`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-24" />
        <div className="max-w-6xl h-full m-auto flex-col justify-between items-center">
          <div className="md:flex md:gap-4">
            <div className="w-auto md:w-1/2">
              <ImageGallery items={handleImageDownload()} />
            </div>
            <div className="w-auto flex-col items-start justify-between md:w-1/2">
              <h1>{props.product.name}</h1>
              <p>{props.product.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
