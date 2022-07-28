import './card-list.styles.css';
import Card from '../card/card.component';
import { forwardRef } from 'react';

const Cardlist = ({monsters}) => {

        return (
        <div className="card-list">
            {monsters.map(monster => {
                const {name, email, id} = monster;
                return (
                   <Card monster = {monster}/>         
        )})}
        </div>)
    }

export default Cardlist;