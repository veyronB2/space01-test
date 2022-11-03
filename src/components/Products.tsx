import { data } from "../data/ProductsData";
import { useState, useEffect, useCallback } from "react";
import Button from "./Button";

type Product = { name: string; price: number };

const Products = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [sortedData, setSortedData] = useState<Product[]>(data);
  const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([]);

  const getSlicedData = useCallback(
    (products: Product[]) => {
      const lastItemIndex = collapsed ? 5 : data.length;
      return products.slice(0, lastItemIndex);
    },
    [collapsed]
  );

  useEffect(() => {
    const products = data.sort((a, b) => a.price - b.price);
    setSortedData(products);
    setProductsToDisplay(getSlicedData(products));
  }, [getSlicedData]);

  const handleOnClick = useCallback(() => {
    setCollapsed(!collapsed);
    setProductsToDisplay(getSlicedData(sortedData));
  }, [collapsed, getSlicedData, sortedData]);

  return (
    <div>
      <section className="w-full px-5 bg-zinc-100 text-center pt-20">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl font-bold inline">Products</h2>
          <Button
            text={collapsed ? "View All" : "Collapse"}
            onClick={handleOnClick}
          />
        </div>

        <div className="w-full grid-flow-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    2xl:grid-cols-4  gap-8 lg:gap-12 text-center py-8 2xl:px-44 mt-8">
          {productsToDisplay.map(
            ({ name, price }: { name: string; price: number }) => {
              return (
                <div
                  key={name}
                  className="max-w-xs rounded overflow-hidden shadow-lg bg-white  mx-auto "
                >
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Doloremque explicabo, iste amet, atque asperiores ab
                      laborum velit ullam quos maxime id nemo odit voluptatibus
                      corrupti quasi hic excepturi fugiat animi.
                    </p>
                    <div className="font-bold text-xl mb-2">£{price}</div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
