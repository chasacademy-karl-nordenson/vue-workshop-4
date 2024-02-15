
import { defineStore } from 'pinia';

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsState {
  products: Product[];
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [],
  }),
  getters: {
    totalProducts(state): number {
      return state.products.length;
    },
    productsAbovePrice(state): (price: number) => Product[] {
      return (price: number) => state.products.filter(product => product.price > price);
    },
  },
  actions: {
    addProduct(state: ProductsState, product: Product): void {
      state.products.push(product);
    },
    removeProduct(state: ProductsState, productId: number): void {
      const index = state.products.findIndex(product => product.id === productId);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});
