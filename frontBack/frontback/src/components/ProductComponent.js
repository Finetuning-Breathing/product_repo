import React from 'react';
import Parse from 'parse/dist/parse.min';

export const ProductComponent = () => {
    let products = [];

    async function fetchPerson() {
        let query = new Parse.Query('Products');
// When using .find() in a query without other operations, you will
// get every object saved in your class
        let queryResult = await query.find();
        for (let p in queryResult){
            products[p] = {
                inst:queryResult[p].get('Instrument'),
                desc:queryResult[p].get('Desc'),
                brand:queryResult[p].get('Brand'),
                price:queryResult[p].get('Price'),
                rating:queryResult[p].get('Rating'),
                tags:queryResult[p].get('Tags'),
                inCart:queryResult[p].get('InCart')
            };
        }
        console.log(products);
    }

    return (
        <div>
            <button onClick={fetchPerson}>Fetch Person</button>
        </div>
    );
};
