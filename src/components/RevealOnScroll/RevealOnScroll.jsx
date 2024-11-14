
import React from 'react';
import { useInView } from 'react-intersection-observer';
import "./RevealOnScroll.scss";

const RevealOnScroll = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`reveal ${inView ? 'visible' : ''}`}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 2s ease, transform 2s ease',
            }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;