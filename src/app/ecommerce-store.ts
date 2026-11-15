import { computed, inject } from '@angular/core';
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { produce } from 'immer';
import { Product, productsApi } from './models/products';
import type { CartItem } from './models/cart';
import { Toaster } from './services/toaster';

export type EcommerceStoreState = {
  products: Product[];
  category: string;
  wishlistItem: Product[];
  cartItem: CartItem[];
};

const initialState: EcommerceStoreState = {
  products: productsApi,
  category: 'all',
  wishlistItem: [],
  cartItem: [],
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withComputed(({ category, products, wishlistItem, cartItem }) => ({
    filteredProducts: computed(() => {
      const normalizedCategory = category().trim().toLowerCase();
      if (normalizedCategory === 'all') {
        return products();
      }
      return products().filter(
        (product) => product.category.toLowerCase() === normalizedCategory,
      );
    }),
    wishlistCount: computed(() => wishlistItem().length),
    cartCount: computed(() => cartItem().reduce((total, item) => total + item.quantity, 0)),
  })),

  withMethods((store, toaster = inject(Toaster)) => ({
    setCategory: signalMethod<string>((category) => {
      patchState(store, { category });
    }),

    addToWishList: (product: Product) => {
      const updatedWishlistItems = produce(store.wishlistItem(), (draft) => {
        if (!draft.some((item) => item.id === product.id)) {
          draft.push(product);
        }
      });
      patchState(store, { wishlistItem: updatedWishlistItems });
      toaster.success('Product added to wishlist successfully!');
    },

    removeFromWishList: (productId: string) => {
      patchState(store, (state) => ({
        wishlistItem: state.wishlistItem.filter((item) => item.id !== productId),
      }));
      toaster.error('Product removed from wishlist successfully!');
    },

    clearWishList: () => {
      patchState(store, { wishlistItem: [] });
      toaster.error('Wishlist cleared successfully!');
    },

    addToCart: (product: Product, quantity = 1) => {
      const existingIndex = store.cartItem().findIndex((item) => item.product.id === product.id);

      const updatedCartItems = produce(store.cartItem(), (draft) => {
        if (existingIndex !== -1) {
          draft[existingIndex].quantity += quantity;
        } else {
          draft.push({ product, quantity });
        }
      });

      patchState(store, { cartItem: updatedCartItems });
      toaster.success(existingIndex !== -1 ? 'Product added again' : 'Product added to cart successfully!');
    },

    setItemQuantity(params: { productId: string, quantity: number }) {
      const index = store.cartItem().findIndex(c => c.product.id === params.productId);
      const update = produce(store.cartItem(), (draft) => {
        draft[index].quantity = params.quantity
      });

      patchState(store, { cartItem: update })
    },

    addAllWishlistCart: () => {
      const updateCartItems = produce(store.cartItem(), (draft) => {
        store.wishlistItem().forEach(p => {
          if (!draft.find(c => c.product.id === p.id)) {
            draft.push({ product: p, quantity: 1 })
          }
        })
      })

      patchState(store, { cartItem: updateCartItems, wishlistItem: [] })
    },

    moveToWishlist: (product: Product) => {
      const updatedCartItems = store.cartItem().filter(p => p.product.id !== product.id);
      const updatedWishlist = produce(store.wishlistItem(), (draft) => {
        if (!draft.find(p => p.id === product.id)) {
          draft.push(product)
        }
      })

      patchState(store, { cartItem: updatedCartItems, wishlistItem: updatedWishlist })
    },

    removeFormCart: (product: Product) => {
      patchState(store, {
        cartItem: store.cartItem().filter((c) => c.product.id !== product.id)
      })
    }
  })),
);