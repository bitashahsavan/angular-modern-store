# 🛍️ Modern Store

A responsive Angular e-commerce storefront built with Angular 22, focused on modern state management, standalone components, and clean shopping flows.

- Demo: https://angular-modern-store.netlify.app/
- Developer: Bita Shahsavan
- LinkedIn: https://www.linkedin.com/in/bita-shahsavan-830471299/
- Created: November 2026

## ✨ Highlights

- Product catalog with category-based filtering
- Wishlist management with add/remove actions
- Shopping cart with quantity updates and subtotal calculations
- Responsive layout for desktop and mobile screens
- Angular Material UI components
- Global toast notifications for user feedback
- Modern Angular state patterns using signals

## 🧩 Features

1. Product listing by category with dynamic route params
2. Add/remove products from wishlist
3. Add to cart and update item quantities
4. Automatic calculation of subtotal, tax, and total
5. Wishlist-to-cart transfer and cart cleanup flows
6. Standalone Angular components
7. Route-based navigation with lazy-loaded components
8. State-driven UI using NgRx Signals
9. Toast feedback via `@ngxpert/hot-toast`
10. Material design styling using Angular Material

## 🛠️ Tech Stack

- Angular 22
- TypeScript
- Angular Router
- Angular Material
- NgRx Signals
- RxJS
- Hot Toast
- HTML / CSS

## 🏗️ Angular Concepts Used in This Project

This project is a good example of modern Angular patterns rather than a simple static app. The main concepts used are:

### 1. Standalone Components
Each component is created as a standalone component and imported directly where needed.

Example:
- `app.ts`
- `products-grid.ts`
- `product-card.ts`
- `toggle-wishlist-button.ts`

This reduces boilerplate and makes feature composition simpler.

### 2. Signals and Reactive State
The app uses Angular signals and NgRx Signals for reactive state.

Key files:
- `src/app/ecommerce-store.ts`
- `src/app/pages/products-grid/products-grid.ts`
- `src/app/component/summarize-order/summarize-order.ts`

Used APIs:
- `signalStore()`
- `withState()`
- `withComputed()`
- `withMethods()`
- `computed()`
- `signalMethod()`
- `patchState()`

This central store manages:
- products
- active category
- wishlist items
- cart items
- derived values like `filteredProducts`, `wishlistCount`, and `cartCount`

### 3. Dependency Injection with `inject()`
The app uses Angular's modern dependency injection pattern instead of constructor-based injection in many cases.

Examples:
- `inject(EcommerceStore)`
- `inject(HotToastService)`
- `inject(Router)`

This is cleaner for signal-based and standalone code.

### 4. `input()`, `computed()`, and `effect()`
The app uses Angular reactive input patterns:

- `input()` for route-driven values and component props
- `computed()` for derived UI state
- `effect()` for side effects when route/category changes

Example:
- `category = input<string>('')` in `products-grid.ts`
- `this.store.setCategory(this.category())` inside `effect()`

### 5. Angular Router with Lazy-Loaded Components
The project uses the Angular Router with lazy component loading via `loadComponent`.

Routes are defined in:
- `src/app/app.routes.ts`

Paths include:
- `/products/:category`
- `/wishlist`
- `/cart`

The router also uses:
- `withComponentInputBinding()`
- route params to drive UI state dynamically

### 6. Template Control Flow
The templates use modern Angular block syntax instead of `*ngIf` and `*ngFor`.

Examples:
- `@if (...) { ... }`
- `@for (...) { ... }`

This is used in pages such as:
- `my-wishlist.html`
- `products-grid.html`
- `list-cart-items.html`

### 7. Angular Material Components
The UI uses Angular Material modules for clean, reusable UI elements.

Used components include:
- `MatSidenavModule`
- `MatListModule`
- `MatButtonModule`
- `MatIconModule`

### 8. Reusable Services and Toast Notifications
A custom `Toaster` service wraps the third-party toast system and exposes a simple API.

File:
- `src/app/services/toaster.ts`

This is used to show success and error feedback after wishlist/cart actions.

### 9. Immutable State Updates with Immer
The store uses `immer` for immutable state changes, especially for nested/cart data updates.

This keeps updates predictable and easier to maintain when modifying arrays and objects.

### 10. Component Communication and Derived UI
The app demonstrates clean component composition:
- parent state is exposed from the store
- child components consume inputs and emit outputs
- derived values are recalculated automatically from signals

## 📁 Project Structure

```bash
src/
├── app/
│   ├── component/
│   │   ├── back-button/
│   │   ├── product-card/
│   │   ├── qty-selector/
│   │   ├── summarize-order/
│   │   └── toggle-wishlist-button/
│   ├── directives/
│   ├── layout/
│   │   ├── header/
│   │   └── header-actions/
│   ├── models/
│   ├── pages/
│   │   ├── my-wishlist/
│   │   ├── products-grid/
│   │   ├── show-cart-item/
│   │   └── view-cart/
│   ├── services/
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.ts
│   ├── ecommerce-store.ts
│   └── models/
├── index.html
├── main.ts
├── styles.css
└── material-theme.scss
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app

```bash
npm start
```

Then open:

```bash
http://localhost:4200/
```

### Production build

```bash
npm run build
```

## ⭐ Summary

This project combines modern Angular architecture with practical e-commerce features. It shows how to build a real application using standalone components, the Angular router, Angular Material, and reactive state management with signals, while keeping the logic easy to maintain and extend.


