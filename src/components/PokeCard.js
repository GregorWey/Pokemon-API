import React from 'react'
import { nanoid } from 'nanoid'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import bugIcon from './icons/bug.svg'
import darkIcon from './icons/dark.svg'
import dragonIcon from './icons/dragon.svg'
import electricIcon from './icons/electric.svg'
import fairyIcon from './icons/fairy.svg'
import fightingIcon from './icons/fighting.svg'
import fireIcon from './icons/fire.svg'
import flyingIcon from './icons/flying.svg'
import ghostIcon from './icons/ghost.svg'
import grassIcon from './icons/grass.svg'
import groundIcon from './icons/ground.svg'
import iceIcon from './icons/ice.svg'
import normalIcon from './icons/normal.svg'
import poisonIcon from './icons/poison.svg'
import psychicIcon from './icons/psychic.svg'
import rockIcon from './icons/rock.svg'
import steelIcon from './icons/steel.svg'
import waterIcon from './icons/water.svg'

export default function PokeCard(props){

    const [pokemonData, setPokemonData] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [show,setShow] = React.useState(false);
    const handleShow = () => setShow(!show);

    React.useEffect(()=>{
        const getPokemon = async(id)=>{
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const res = await fetch(url);
            const data = await res.json();

            setPokemonData(data);
            setLoading(false);
        }
    getPokemon(props.id)
    },[props.id]);

    if(loading) return <h1>
        LOADING......
    </h1>

    console.log(pokemonData)
}