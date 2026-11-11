
import { computed, inject } from '@angular/core';
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product, productsApi } from './models/products';
import { produce } from 'immer';
import { Toaster } from './services/toaster';

export type EcommerceStoreState = {
    products: Product[];
    category: string;
    wishlistItem: Product[];
};

export const EcommerceStore = signalStore(
    { providedIn: 'root' },

    withState<EcommerceStoreState>({
        products: productsApi,
        category: 'all',
        wishlistItem: [],
    } as EcommerceStoreState),

    withComputed(({ category, products ,wishlistItem}) => ({
        filteredProducts: computed(() => {
            const normalizedCategory = category().trim().toLowerCase();

            if (normalizedCategory === 'all') {
                return products();
            }

            return products().filter(
                (product: Product) => product.category.toLowerCase() === normalizedCategory,
            );
        }),
        wishlistCount: computed(() =>  wishlistItem().length)
    })),

    withMethods((store ,toaster = inject(Toaster)) => ({
        setCategory: signalMethod<string>((category: string) => {
            patchState(store, { category });
        }),

        addToWishList: (product: Product) => {
            
            const updatedWishlistItems = produce(store.wishlistItem(), (draft) => {
                if (!draft.some((item) => item.id === product.id)) {
                    draft.push(product);
                }
            });
            console.log('wishlist now:', updatedWishlistItems);

            patchState(store, { wishlistItem: updatedWishlistItems });
            toaster.success('Product added to wishlist successfully!');
        },

        removeFromWishList: (productId: string) => {
            patchState(store, (state) => ({
                wishlistItem: state.wishlistItem.filter((item) => item.id !== productId), 
            }));
                 toaster.error('Product removed from wishlist successfully!')
        },

        clearWishList : () => {
            patchState(store, { wishlistItem: [] });
            toaster.error('Wishlist cleared successfully!');
        }
    })),
);