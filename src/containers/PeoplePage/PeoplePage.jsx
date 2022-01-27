import React, { useEffect, useState } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import styles from './PeoplePage.module.css'

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

    return (
        <nav>
            <ul className={styles.peoplePage__container}>
                {
                    people
                        ? people.map(({ id, name, img }) => <PeopleList key={id} name={name} img={img} />)
                        : <h1>Loading...</h1>
                }
            </ul>
        </nav>
    )
};

export default PeoplePage;
