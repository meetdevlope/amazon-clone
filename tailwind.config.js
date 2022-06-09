module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {},
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md3': '700px',
            // => @media (max-width: 767px) { ... }
            'md2': { 'max': '645px' },
            // => @media (max-width: 767px) { ... }
            'md': { 'max': '700px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
        }
    },
    plugins: [require('@tailwindcss/forms')],
};