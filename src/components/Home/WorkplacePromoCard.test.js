import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WorkplacePromoCard from './WorkplacePromoCard';

describe('WorkplacePromoCard', () => {
  beforeEach(() => {
    sessionStorage.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.clearAllTimers();
    });
    jest.useRealTimers();
  });

  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <WorkplacePromoCard />
      </BrowserRouter>
    );
  };

  test('does not render immediately on mount', () => {
    renderComponent();
    expect(screen.queryByText('Mental wellbeing at work')).not.toBeInTheDocument();
  });

  test('renders after 8-second delay', () => {
    renderComponent();

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.getByText('Mental wellbeing at work')).toBeInTheDocument();
    expect(
      screen.getByText('Get in touch to discuss a mental health talk or support for your workplace.')
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument();
  });

  test('dismisses and saves preference to sessionStorage when close button is clicked', () => {
    renderComponent();

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    const closeBtn = screen.getByRole('button', {
      name: /dismiss workplace mental wellbeing promotion/i,
    });
    fireEvent.click(closeBtn);

    expect(screen.queryByText('Mental wellbeing at work')).not.toBeInTheDocument();
    expect(sessionStorage.getItem('workplace_promo_dismissed')).toBe('true');
  });

  test('does not render if previously dismissed in session', () => {
    sessionStorage.setItem('workplace_promo_dismissed', 'true');

    renderComponent();

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.queryByText('Mental wellbeing at work')).not.toBeInTheDocument();
  });
});
