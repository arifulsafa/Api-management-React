# 🛍️ Product Store - Modern E-Commerce Frontend

A beautiful, modern, and fully-featured product store frontend built with React, TypeScript, Vite, and Tailwind CSS. This application demonstrates best practices in state management, error handling, loading states, and user experience design.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

### Core Features
- ✅ **Product Listing** - Beautiful grid layout displaying all available products
- ✅ **Loading States** - Elegant spinner and skeleton loaders during data fetching
- ✅ **Error Handling** - User-friendly error messages with retry functionality
- ✅ **Responsive Design** - Fully responsive across all device sizes

### Advanced Features
- 🔍 **Search Functionality** - Real-time search across product titles, descriptions, and categories
- 🏷️ **Category Filtering** - Filter products by category with interactive badges
- 💰 **Price Filtering** - Filter products by price ranges ($0-50, $50-100, $100-500, $500+)
- 📊 **Sorting Options** - Sort by price (low to high, high to low) or name (A-Z, Z-A)
- 🖼️ **Product Modal** - Detailed product view with image gallery
- 🎨 **Modern UI** - Beautiful design with smooth animations and transitions
- ⚡ **Performance** - Optimized with React hooks and memoization
- ♿ **Accessibility** - ARIA labels, semantic HTML, and keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd api-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
api-task/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Alert.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Label.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── Spinner.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ErrorState.tsx
│   │   ├── LoadingState.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductFilters.tsx
│   │   ├── ProductModal.tsx
│   │   └── SearchBar.tsx
│   ├── hooks/
│   │   ├── useCategories.ts
│   │   └── useProducts.ts
│   ├── types/
│   │   └── product.ts
│   ├── utils/
│   │   ├── filterProducts.ts
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Key Components

### State Management

The application uses React hooks for state management:

- **`useProducts`** - Fetches and manages product data with loading and error states
- **`useCategories`** - Fetches and manages category data
- **`useMemo`** - Optimizes filtering and sorting performance

### UI Components

All UI components follow the shadcn/ui design system:

- **Card Components** - Product display cards with hover effects
- **Loading States** - Spinner and skeleton loaders
- **Error States** - User-friendly error messages with retry
- **Modal** - Product detail view with image gallery
- **Filters** - Search, category, price, and sort controls

## 🎨 Design Features

- **Modern UI** - Clean, minimalist design with smooth animations
- **Responsive Grid** - Adapts from 1 column (mobile) to 4 columns (desktop)
- **Hover Effects** - Interactive cards with scale and shadow transitions
- **Color System** - Consistent color palette using CSS variables
- **Typography** - Clear hierarchy with proper font weights and sizes
- **Spacing** - Consistent spacing using Tailwind's spacing scale

## 🔌 API Integration

The application integrates with the [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/):

- **Base URL**: `https://api.escuelajs.co/api/v1`
- **Endpoints Used**:
  - `GET /products` - Fetch all products
  - `GET /categories` - Fetch all categories

### API Response Example

```json
{
  "id": 4,
  "title": "Handmade Fresh Table",
  "slug": "handmade-fresh-table",
  "price": 687,
  "description": "Andy shoes are designed to keeping in...",
  "category": {
    "id": 5,
    "name": "Others",
    "image": "https://placehold.co/600x400",
    "slug": "others"
  },
  "images": [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400"
  ]
}
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.5** - Build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2-3 columns)
- **Desktop**: > 1024px (3-4 columns)

## 🎯 Features in Detail

### Loading States
- Spinner animation during initial load
- Skeleton loaders matching product card layout
- Smooth transitions between states

### Error Handling
- User-friendly error messages
- Retry functionality
- Graceful degradation

### Search & Filter
- Real-time search across multiple fields
- Category filtering with visual badges
- Price range filtering
- Multiple sorting options
- Active filter indicators
- Clear all filters option

### Product Display
- Responsive grid layout
- Product cards with images
- Category badges
- Price formatting
- Hover effects
- Click to view details

### Product Modal
- Full product details
- Image gallery
- Category information
- Formatted pricing
- Product metadata

## 🚦 State Management Flow

```
App Component
├── useProducts Hook
│   ├── Loading State
│   ├── Error State
│   └── Success State (Products Data)
├── useCategories Hook
│   ├── Loading State
│   └── Categories Data
├── Filter State (Search, Category, Price, Sort)
└── Modal State (Selected Product)
```

## 🎨 Customization

### Colors
Colors can be customized in `src/index.css` by modifying CSS variables:

```css
:root {
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  /* ... */
}
```

### Components
All components are modular and can be easily customized or extended in the `src/components` directory.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Platzi Fake Store API](https://fakeapi.platzi.com/en/rest/products/) for providing the API
- [shadcn/ui](https://ui.shadcn.com/) for design inspiration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for beautiful icons

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
