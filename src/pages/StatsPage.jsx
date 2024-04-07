import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import './Styles/StatsPage.css';

const StatsPage = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getPokemon();
  }, [name]);

  useEffect(() => {
    if (pokemon) {
      setStats(pokemon.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      })));
    }
  }, [pokemon]);
  return (
    <div className="poke__container">
      <h2 className="poke__title">{pokemon?.name} Stats</h2>
      <ul className="poke__stats-list">
        {stats.map(stat => (
          <li className="poke__stat" key={stat.name}>
            {stat.name}: {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default StatsPage;
