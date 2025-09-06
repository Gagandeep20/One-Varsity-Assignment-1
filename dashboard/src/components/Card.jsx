import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({
  title,
  value,
  subtitle,
  icon, // optional JSX (e.g. <svg/> or emoji)
  trend, // number (positive or negative)
  loading, // boolean
  className,
}) {
  const trendClass =
    trend == null ? "" : trend >= 0 ? "card-trend-up" : "card-trend-down";
  const trendSign = trend == null ? "" : trend >= 0 ? "▲" : "▼";

  return (
    <div className={`card ${className ?? ""}`}>
      <div className="card-top">
        <div className="card-title">
          <div className="card-icon">{icon}</div>
          <div>
            <div className="card-heading">{title}</div>
            {subtitle && <div className="card-subtitle">{subtitle}</div>}
          </div>
        </div>
        {loading ? (
          <div className="card-loader" aria-hidden>
            …
          </div>
        ) : (
          <div className={`card-trend ${trendClass}`}>
            {trend != null && (
              <span className="card-trend-sign">{trendSign}</span>
            )}
            {trend != null && (
              <span className="card-trend-value">{Math.abs(trend)}%</span>
            )}
          </div>
        )}
      </div>

      <div className="card-value">
        {loading ? <span className="skeleton" /> : value}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  trend: PropTypes.number,
  loading: PropTypes.bool,
  className: PropTypes.string,
};
