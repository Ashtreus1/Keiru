import React from 'react';
import './globals.css'

const Background = ({ children }) => {
  return (
    <>
      <div className="background">

            <div className="component-container">
                {children}
            </div>
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                </svg>
                <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
                </div>
            </div>

            <script
                type="module"
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            ></script>

            <script
                nomodule
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            ></script>
      </div>
    </>
  );
};

export default Background;
