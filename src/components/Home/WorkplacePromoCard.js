import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoBriefcaseOutline } from 'react-icons/io5';
import '../../styles/WorkplacePromoCard.css';

const WorkplacePromoCard = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed during the current session
    const isDismissed = sessionStorage.getItem('workplace_promo_dismissed');
    if (isDismissed === 'true') {
      setDismissed(true);
      return;
    }

    // 8-second delay before showing the card
    const timer = setTimeout(() => {
      setVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem('workplace_promo_dismissed', 'true');
  };

  if (dismissed || !visible) {
    return null;
  }

  return (
    <aside
      className="workplace-promo-card"
      aria-label="Workplace mental wellbeing promotional announcement"
      role="region"
    >
      <div className="workplace-promo-content">
        <button
          type="button"
          className="workplace-promo-close"
          onClick={handleDismiss}
          aria-label="Dismiss workplace mental wellbeing promotion"
        >
          <IoClose aria-hidden="true" />
        </button>

        <div className="workplace-promo-header">
          <div className="workplace-promo-badge">
            <IoBriefcaseOutline aria-hidden="true" className="promo-badge-icon" />
            <span>Workplace Health</span>
          </div>
        </div>

        <h3 className="workplace-promo-title">Mental wellbeing at work</h3>

        <p className="workplace-promo-body">
          Get in touch to discuss a mental health talk or support for your workplace.
        </p>

        <div className="workplace-promo-actions">
          <Link
            to="/contact?subject=Workplace Support"
            className="workplace-promo-btn"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default WorkplacePromoCard;
