/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const getStaticProps = async () => {
  const response = await fetch(
    'https://sickomozne.loumadev.eu/api/v1/product/dump',
    {
      headers: {
        Authorization: 'Bearer ' + process.env.PRODUCTS_DUMP_TOKEN,
      },
    }
  );
  const data = await response.json();
  const catalog = data.products;
  return {
    props: {
      catalog,
    },
  };
};

const CatalogPage: NextPage = ({ catalog }: any) => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState<any>({
    keyword: '',
    keywordKeys: ['name', 'description'],
  });
  const [searchResult, setSearchResult] = useState<any>([]);

  useEffect(() => {
    setSearchQuery((prevState) => ({
      ...prevState,
      keyword: router.query['keyword']
        ? router.query['keyword'].toString()
        : '',
    }));
  }, [router]);

  const syncSearchQuery = (e: any) => {
    const { name, value } = e.target;
    setSearchQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    let result: any = [];
    result = catalog.filter((product: any) =>
      Object.keys(product).some((key) => {
        if (
          typeof product[key] === 'string' ||
          product[key] instanceof String
        ) {
          if (searchQuery.keywordKeys.some((keywordKey) => key == keywordKey)) {
            return product[key].includes(searchQuery.keyword);
          }
        }
        return null;
      })
    );
    console.log(result);

    if (result) {
      let answer = result.map((product: any) => {
        return (
          <div key={product.id + 'catalog_card'}>
            <p>{product.name}</p>
            <img
              alt={product.thumbnail}
              src="/banner_image_temporary_1.png"
              width="100px"
              height="100px"
            />
            <p>{product.description}</p>
          </div>
        );
      });

      answer.reverse();
      return answer;
    }
    return null;
  };

  const logMe = () => {
    console.log(searchQuery);
    console.log(searchResult);
    console.log(catalog);
  };

  return (
    <div>
      <p>Keyword</p>
      <p>Keyword</p>
      <p>Keyword</p>
      <p>Keyword</p>
      <p>Keyword</p>
      <p>Keyword</p>
      <p>Keyword</p>
      <p>Keyword</p>
      <p>Keyword</p>
      <input type="text" name="keyword" onChange={(e) => syncSearchQuery(e)} />
      <button onClick={() => handleSearch()}>Search</button>
      <button onClick={() => logMe()}>logResuyt</button>
      <div>{handleSearch()}</div>
    </div>
  );
};

export default CatalogPage;
