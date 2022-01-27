import React, { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';

const PeoplePage = () => {

    const [people, setPeople] = useState(null)

    const getResource = async (API_PEOPLE) => {
        const res = await getApiResource(API_PEOPLE);

        const peopleList = res.results.map(({ name, url }) => {
            return {
                name, url
            }
        })

        setPeople(peopleList)
        console.log(people, res);
    }

    useEffect(() => {
        getResource(API_PEOPLE);
        console.log('test')
    }, [])

    console.log(people);
    return (
        <nav>
            <ul>
                {
                    people ? (
                        people.map(({ name, url }) => <li key={name}>{name} {url}</li>)
                    )
                        : <h1>Loading...</h1>
                }
            </ul>
        </nav>
    )
};

export default PeoplePage;
