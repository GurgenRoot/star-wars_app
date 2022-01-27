import React, { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';

const PeoplePage = () => {

    const [people, setPeople] = useState(null)

    const getResource = async (API_PEOPLE) => {
        const res = await getApiResource(API_PEOPLE);

        const peopleList = res.results.map(({ name, url }) => {
            const id = getPeopleId(url);
            const img = getPeopleImg(id);

            return {
                id, name, img
            }
        })
        setPeople(peopleList)
    }

    useEffect(() => {
        getResource(API_PEOPLE);
    }, [])

    console.log(people);

    return (
        <nav>
            <ul>
                {
                    people ? (
                        people.map(({ name, id, img }) => {
                            return (
                                <li key={id}>
                                    <img src={img} alt={name} />
                                    <p>{name}</p>
                                </li>
                            )
                        })
                    )
                        : <h1>Loading...</h1>
                }
            </ul>
        </nav>
    )
};

export default PeoplePage;
