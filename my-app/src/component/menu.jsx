import React from 'react';
import { Link } from 'react-router-dom';

// Menu item translations for different languages
const menuLabels = {
  English: {
    home: 'Home',
    movies: 'Movies',
    tvShows: 'TV Shows',
    sports: 'Sports',
    live: 'Live',
  },
  French: {
    home: 'Accueil',
    movies: 'Films',
    tvShows: 'Émissions de télévision',
    sports: 'Sports',
    live: 'En direct',
  },
  German: {
    home: 'Startseite',
    movies: 'Filme',
    tvShows: 'Fernsehshows',
    sports: 'Sport',
    live: 'Live',
  },
  Russian: {
    home: 'Главная',
    movies: 'Фильмы',
    tvShows: 'Телешоу',
    sports: 'Спорт',
    live: 'В прямом эфире',
  },
  Spanish: {
    home: 'Inicio',
    movies: 'Películas',
    tvShows: 'Programas de TV',
    sports: 'Deportes',
    live: 'En vivo',
  },
  Chinese: {
    home: '首页',
    movies: '电影',
    tvShows: '电视节目',
    sports: '体育',
    live: '直播',
  },
};

function Menu({ language }) {
  const labels = menuLabels[language] || menuLabels.English;

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">{labels.home}</Link>
        </li>
        <li className="menu-item">
          <Link to="/movies" className="menu-link">{labels.movies}</Link>
        </li>
        <li className="menu-item">
          <Link to="/tvshows" className="menu-link">{labels.tvShows}</Link>
        </li>
        <li className="menu-item">
          <Link to="/sports" className="menu-link">{labels.sports}</Link>
        </li>
        <li className="menu-item">
          <Link to="/live" className="menu-link">{labels.live}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;