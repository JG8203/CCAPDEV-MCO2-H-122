/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
        extend: {
            colors: {
                'red-maroon': '#38000b',
                'olive': '#716d38',
                'beige': '#e7ddd3',
                'burnt-sienna': '#b24f32',
                'dim-gray': '#696969',
                'wow-yellow': '#D5994D',
            },
        },
    },
    variants: {},
    plugins: [],
}