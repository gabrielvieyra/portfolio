// Interfaces
import { Project } from '../types/types';

// Assets
import { rickAndMortyApp, heroesApp, cinemania, pokedex, clonGiphy } from '../assets';

export const projects: Array<Project> = [
  {
    name: 'Heroes App',
    stack: ['HTML', 'Sass', 'TypeScript', 'React', 'Firebase'],
    description:
      'Proyecto creado con react que te permite crear tu propio equipo de héroes. Para poder utilizar la aplicación, el usuario debe estar autenticado, en el caso de ingresar a una ruta privada será automáticamente redireccionado a la pantalla de login.',
    image: heroesApp,
    url: 'https://heroes-app-gabriel-vieyra.vercel.app/',
    code: 'https://github.com/gabrielvieyra/heroes-app',
  },
  {
    name: 'Rick and Morty App',
    stack: ['HTML', 'Sass', 'TypeScript', 'React', 'Cypress'],
    description:
      'Esta página web muestra un listado de personajes de la serie de animación Rick and Morty con información de cada uno de los personajes.',
    image: rickAndMortyApp,
    url: 'https://rick-and-morty-gabriel-vieyra.vercel.app/',
    code: 'https://github.com/gabrielvieyra/rick-and-morty',
  },
  {
    name: 'Cinemania',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node'],
    description:
      'Este proyecto es un sitio web cinéfilo que te permite estar al tanto de las películas que están en cartelera, próximas a estrenarse, las últimas noticias tanto de cine como de series, cuenta también con información acerca de cada cine y un catalogo de precios de comidas y bebidas.',
    image: cinemania,
    url: 'https://blissful-mcclintock-e2ac4d.netlify.app/',
    code: 'https://github.com/gabrielvieyra/cinemania',
  },
  {
    name: 'Pokedex',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    description:
      'Proyecto hecho con JavaScript puro donde mediante peticiones a una API obtengo información de pokemones.',
    image: pokedex,
    url: 'https://gabrielvieyra.github.io/pokedex-js/',
    code: 'https://github.com/gabrielvieyra/pokedex-js',
  },
  {
    name: 'Clon Giphy',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    description:
      'Proyecto corto hecho con JavaScript puro donde podes buscar tus gifs favoritos, proyecto para practicar conceptos como fetch, asíncrono, síncrono, promesas, metodo then, catch, API, endpoints, async-await, DOM, JSON vistos durante la cursada de Programación Web Full Stack React en Comunidad IT.',
    image: clonGiphy,
    url: 'https://gabrielvieyra.github.io/clon-giphy/',
    code: 'https://github.com/gabrielvieyra/clon-giphy',
  },
];
