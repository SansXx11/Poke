import { useEffect } from "react"
import useFetch from "../../hooks/UseFetch"
import './Style/PokeCard.css'

const SelectType = ({setTypeSelected}) => {

    const url ='https://pokeapi.co/api/v2/type'
    const [ types, getTypes ] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = e =>{
        setTypeSelected(e.target.value)
    }

    return (
    <select className="types__list" onChange={handleChange}>
        <option value='allPokemons'>All pokemons</option>
        {
            types?.results.map( typeinfo =>(
                <option   key={typeinfo.url} value={typeinfo.url}>{typeinfo?.name}</option>
            ))
        }
    </select>
  )
}
export default SelectType