"use client";

import React from "react";

interface StarRatingProps {
  rate: number | string;
  count?: number;
  size?: number;
}

const StarRating = ({ rate, count, size = 14 }: StarRatingProps) => {
  const safeRate = typeof rate === "string" ? parseFloat(rate) : rate;

  const fullStars = Math.floor(safeRate);
  const hasHalfStar = safeRate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-xs text-muted-foreground">
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            width={size}
            height={size}
            fill="#facc15"
            viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.922L19.336 24 12 20.01 4.664 24 6 15.67 0 9.748l8.332-1.593z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor">
            <defs>
              <linearGradient id={`half-${safeRate}`}>
                <stop
                  offset="50%"
                  stopColor="#facc15"
                />
                <stop
                  offset="50%"
                  stopColor="transparent"
                />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${safeRate})`}
              d="M12 .587l3.668 7.568L24 9.748l-6 5.922L19.336 24 12 20.01 4.664 24 6 15.67 0 9.748l8.332-1.593z"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            width={size}
            height={size}
            fill="#d1d5db"
            viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.922L19.336 24 12 20.01 4.664 24 6 15.67 0 9.748l8.332-1.593z" />
          </svg>
        ))}
      </div>
      {count !== undefined && (
        <span className="ml-1 text-xs text-muted-foreground">
          {safeRate.toFixed(1)} | {count} terjual
        </span>
      )}
    </div>
  );
};

export default StarRating;
