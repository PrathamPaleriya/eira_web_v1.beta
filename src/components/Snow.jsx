import React, { useMemo } from 'react';
import './Snow.css';

const Snow = () => {
    // Memoize flakes to prevent re-calculation on re-renders
    const flakes = useMemo(() => {
        // Simple check for mobile width
        const isMobile = window.innerWidth < 768;
        const baseContent = Array.from({ length: 50 }).map((_, i) => {
            // Desktop: 4-8px, Mobile: 2-4px
            const size = isMobile
                ? 2 + Math.random() * 2
                : 4 + Math.random() * 4;

            return {
                id: i,
                left: Math.random() * 100, // 0-100%
                animationDelay: Math.random() * 10, // 0-10s delay
                animationDuration: 10 + Math.random() * 10, // 10-20s duration (slow fall)
                size: size,
                opacity: 0.3 + Math.random() * 0.5 // 0.3-0.8 opacity
            };
        });
        return baseContent;
    }, []);

    return (
        <div className="snow-container" aria-hidden="true">
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: `${flake.left}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                        animationDelay: `-${flake.animationDelay}s`, // Negative delay starts animation mid-way
                        animationDuration: `${flake.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default Snow;
