// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
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
  			},
			  strokeOffset1: {
				'0%, 20.5%': { strokeDashoffset: '17' },
				'41%': { strokeDashoffset: '0' },
				'61.75%, 100%': { strokeDashoffset: '-17' },
			  },
			  strokeOffset2: {
				'0%, 29.5%': { strokeDashoffset: '22.63' },
				'50%': { strokeDashoffset: '0' },
				'70.5%, 100%': { strokeDashoffset: '-22.63' },
			  },
			  strokeOffset3: {
				'0%, 38%': { strokeDashoffset: '17' },
				'58.75%': { strokeDashoffset: '0' },
				'79.5%, 100%': { strokeDashoffset: '-17' },
			  },
			  strokeOffset4: {
				'0%, 22%': { strokeDashoffset: '17' },
				'42.75%': { strokeDashoffset: '0' },
				'63.25%, 100%': { strokeDashoffset: '-17' },
			  },
			  moveFade1: {
				'0%': { opacity: '0', transform: 'translate(0, 16px)' },
				'31%': { opacity: '1', transform: 'translate(0, 16px)' },
				'75%': { opacity: '1', transform: 'translate(0, 0)' },
				'92.75%, 100%': { opacity: '0', transform: 'translate(0, 0)' },
			  },
			  moveFade2: {
				'0%': { opacity: '0', transform: 'translate(22px, 0)' },
				'35.25%': { opacity: '1', transform: 'translate(22px, 0)' },
				'75%': { opacity: '1', transform: 'translate(0, 0)' },
				'92.75%, 100%': { opacity: '0', transform: 'translate(0, 0)' },
			  },
			  moveFade3: {
				'0%': { opacity: '0', transform: 'translate(-27px, 0)' },
				'44%': { opacity: '1', transform: 'translate(-27px, 0)' },
				'82.25%': { opacity: '1', transform: 'translate(0, 0)' },
				'100%': { opacity: '0', transform: 'translate(0, 0)' },
			  },
			  moveFade4: {
				'0%': { opacity: '0', transform: 'translate(0, -11px)' },
				'44%': { opacity: '1', transform: 'translate(0, -11px)' },
				'82.25%': { opacity: '1', transform: 'translate(0, 0)' },
				'100%': { opacity: '0', transform: 'translate(0, 0)' },
			  },
			  moveFade5: {
				'0%': { opacity: '0', transform: 'translate(0, -23px)' },
				'22%': { opacity: '1', transform: 'translate(0, -23px)' },
				'61.75%': { opacity: '1', transform: 'translate(0, 0)' },
				'79.5%, 100%': { opacity: '0', transform: 'translate(0, 0)' },
			  },
			  scaleIn1: {
				'0%': { transform: 'scale(0)' },
				'26.5%, 100%': { transform: 'scale(1)' },
			  },
			  scaleIn2: {
				'0%, 13.25%': { transform: 'scale(0)' },
				'44%': { transform: 'scale(1.05)' },
				'48.5%, 100%': { transform: 'scale(1)' },
			  },
			  scaleIn3: {
				'0%, 35.25%': { transform: 'scale(0)' },
				'66.25%': { transform: 'scale(1.05)' },
				'70.5%, 100%': { transform: 'scale(1)' },
			  },
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'stroke-offset-1': 'strokeOffset1 1s ease-in-out forwards',
	   'stroke-offset-2': 'strokeOffset2 1s ease-in-out forwards',
	   'stroke-offset-3': 'strokeOffset3 1s ease-in-out forwards',
	   'stroke-offset-4': 'strokeOffset4 1s ease-in-out forwards',
	   'move-fade-1': 'moveFade1 1s ease-out forwards',
	   'move-fade-2': 'moveFade2 1s ease-out forwards',
	   'move-fade-3': 'moveFade3 1s ease-out forwards',
	   'move-fade-4': 'moveFade4 1s ease-out forwards',
	   'move-fade-5': 'moveFade5 1s ease-out forwards',
	   'scale-in-1': 'scaleIn1 1s ease-in-out forwards',
	   'scale-in-2': 'scaleIn2 1s ease-in-out forwards',
	   'scale-in-3': 'scaleIn3 1s ease-in-out forwards',
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
}

