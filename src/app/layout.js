
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Team Portfolio',
  description: 'A website project for showcasing team members',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <div class="text-container">
            {children}
          </div>
          <div class="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </defs>
            </svg>
            <div class="gradients-container">
              <div class="g1"></div>
              <div class="g2"></div>
              <div class="g3"></div>
              <div class="g4"></div>
              <div class="g5"></div>
              <div class="interactive"></div>
            </div>
          </div>
          
      </body>
    </html>
  )
}
