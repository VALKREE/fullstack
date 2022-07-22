import React, {useState} from 'react';
import GoodItem from "../../components/GoodItem/GoodItem";
import classes from './shop.module.css';

const Shop = () => {
    const [goods, setGoods] = useState([
        {
            id: '1',
            title: 'title',
            image: 'imagepath',
            description: 'lorem',
            price: '1000',
        },
    ]);
    return (
        <div className={classes.goods}>
            {
                goods.map(
                    good=><GoodItem good={good} key={good.id}/>
                )
            }
        </div>
    );
};

export default Shop;