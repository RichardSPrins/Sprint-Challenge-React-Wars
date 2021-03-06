import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Segment, Card } from 'semantic-ui-react' 
import CharacterCard from './CharacterCard'

const CharacterList = (props) => {
  const [homeworld, setHomeworld] = useState()

  useEffect( () => {
    axios
    .get('https://swapi.co/api/planets')
    .then(res => {console.log('Planet Data', res.data.results)
      setHomeworld(res.data.results)})
  }, [])
  if(!homeworld) return <h1>Loading...</h1>
  return (
    <Segment>
      <Card.Group itemsPerRow={3}>
        {props.characters.map(char => <CharacterCard planets={homeworld} characterInfo={char}/>)}
      </Card.Group>
    </Segment>
  )
}

export default CharacterList;