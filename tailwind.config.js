/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'var(--border)',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: 'var(--card)',
  			bg: 'var(--bg)',
  			text: 'var(--text)',
  			forest: 'var(--forest)',
  			sage: 'var(--sage)',
  			earth: 'var(--earth)',
  			sky: 'var(--sky)',
  			cta: 'var(--cta)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			shadow: 'var(--shadow)',
  			shadowSoft: 'var(--shadowSoft)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		fontFamily: {
  			playfair: [
  				'var(--font-playfair)',
  				'serif'
  			],
  			montserrat: [
  				'var(--font-montserrat)',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'h1-desktop': [
  				'56px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '600'
  				}
  			],
  			'h1-mobile': [
  				'38px',
  				{
  					lineHeight: '1.2',
  					fontWeight: '600'
  				}
  			],
  			'h2-desktop': [
  				'34px',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			'h2-mobile': [
  				'26px',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			body: [
  				'16px',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			button: [
  				'15px',
  				{
  					lineHeight: '1.4',
  					fontWeight: '700'
  				}
  			]
  		},
  		maxWidth: {
  			container: '1100px'
  		},
  		minHeight: {
  			hero: '82vh'
  		},
  		spacing: {
  			'section-y-desktop': '72px',
  			'section-y-mobile': '48px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}