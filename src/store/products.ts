import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    totalProducts(): number {
      return this.products.length;
    },
    productsAbovePrice(state) {
      return (price: number) => {
        return state.products.filter(product => product.price > price);
      };
    },
  },
  actions: {
    addProduct(product: Product) {
      this.products.push(product);
    },
    removeProduct(productId: number) {
      console.log('Removing product with ID:', productId);
      const index = this.products.findIndex(product => product.id === productId);
      console.log('Index of product to remove:', index);
      if (index !== -1) {
        this.products.splice(index, 1);
        console.log('Product removed. Updated products:', this.products);
      } else {
        console.warn('Product with ID', productId, 'not found.');
      }
    },
  },
});
