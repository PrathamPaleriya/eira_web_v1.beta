import React, { useMemo } from 'react';
import './Snow.css';

const Snow = () => {
    // Memoize flakes to prevent re-calculation on re-renders
    const flakes = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // 0-100%
            animationDelay: Math.random() * 10, // 0-10s delay
            animationDuration: 10 + Math.random() * 10, // 10-20s duration (slow fall)
            size: 4 + Math.random() * 4, // 4-8px size
            opacity: 0.3 + Math.random() * 0.5 // 0.3-0.8 opacity
        }));
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
