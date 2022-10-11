import React, { useEffect, useState } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import data from './data';
import GlobeIcon from '../../GlobeIcon';
import cookies from 'js-cookie';
import Axios from 'axios';
import styles from './styles';
import { useMediaQuery } from 'react-responsive';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['us', 'fr', 'se', 'tr', 'jp', 'it'],
    fallbackLng: 'se',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

const Languages = () => {
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = data.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const [news, setNews] = useState([]);
  const getCategory = cookies.get('cat');
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || 'ltr';
    Axios.get(
      `${process.env.REACT_APP_NEWS_API_LINK}country=${currentLanguageCode}&category=${getCategory}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    )
      .then((Response: any) => {
        setNews(Response.data.articles);
        //console.table(Response.data.articles);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentLanguage, currentLanguageCode, getCategory]);

  return (
    <div>
      <div className="dropdown" style={styles.dropdown}>
        <button
          className="btn btn-link dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <GlobeIcon />
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {data.map(({ code, name, country_code }) => (
            <li key={country_code} onClick={() => window.location.reload()}>
              <button
                className="dropdown-item"
                onClick={() => i18n.changeLanguage(code)}
                disabled={code === currentLanguageCode}
              >
                <span
                  className={`fi fi-${country_code} mx-2`}
                  style={{
                    opacity: code === currentLanguageCode ? 0.5 : 1,
                  }}
                ></span>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h1 style={styles.welcomeTitle}>{t('welcome_message')}</h1>

      <div style={styles.container}>
        {news.map((news: any, index: any) => (
          <div key={index} style={isMobile ? styles.rowMobil : styles.row}>
            <div
              style={{
                height: '20em',
                backgroundSize: 'cover',
                backgroundImage: `url(${news.urlToImage})`,
              }}
            ></div>
            <div style={styles.newsInfo}>
              <h5>{news.author}</h5>
              <h4>{news.title}</h4>
              <p>{news.description}</p>
              <p>{news.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
