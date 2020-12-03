import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import axios from './axios';
import './TinderCards.css';

interface TinderCardsProps {

}

interface Card {
    name: string;
    imgUrl: string;
}

const swiped = (direction: any, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete);
    //setLastDirection(direction);
}

const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
    
}


export const TinderCards: React.FC<TinderCardsProps> = () => {
    const [people, setPeople] = useState<Card[]>([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/whisker/cards');

            setPeople(req.data);
        }

        fetchData();
    }, [])

    console.log(people);
    
    
    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir: any) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className='card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
                
            </div>
        </div>
    );
}