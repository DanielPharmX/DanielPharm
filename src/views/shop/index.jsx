/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from 'components/product';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';

const Shop = () => {
  useDocumentTitle('Shop | Medix');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  if (window.screen.width <= 800){
    var margin='20%'
  }else{
    var margin='1%'
  }

  return (
    <main className="content" style={{marginTop:margin}}>
      <section className="product-list-wrapper">
        <AppliedFilters filteredProductsCount={store.filteredProducts.length} />
        <ProductList {...store}>
          <ProductGrid products={store.filteredProducts} />
        </ProductList>
      </section>
    </main>
  );
};

export default Shop;
