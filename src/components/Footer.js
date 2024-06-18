import React from 'react';
import { useTranslation } from 'react-i18next';

//Footer page
export const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <h1>{t('footerpage.title')}</h1>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>{t('footerpage.h2About')}</h2>
          <p>{t('footerpage.p1')}</p>
        </div>
        <div className="footer-section links">
          <h2>{t('footerpage.h2QuickLinks')}</h2>
          <ul>
            <li><a href="/">{t('footerpage.linkHome')}</a></li>
            <li><a href="/products">{t('footerpage.linkProducts')}</a></li>
            <li><a href="/cart">{t('footerpage.linkCart')}</a></li>
            <li><a href="/contact">{t('footerpage.linkContact')}</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>{t('footerpage.contact')}</h2>
          <form>
            <label>Your email address</label>
            <input type="email" name="email" className="text-input contact-input"  />
            <label>Your message</label>            
            <textarea rows="4" name="message" className="text-input contact-input" ></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Gift Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

