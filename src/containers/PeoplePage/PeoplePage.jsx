import React, { useEffect, useMemo, useState } from 'react';

import PeopleList from '../../components/PeoplePage/PeopleList';
import { getApiResource } from '../../utils/network';
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData';
import { API_PEOPLE } from '../../constants/api';
import withErrorApi from '../../hoc-helpers/WithErrorApi';

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorApi }) => {

    const [people, setPeople] = useState(null)

    const getResource = async (API_PEOPLE) => {
        const res = await getApiResource(API_PEOPLE);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImg(id);

                return {
                    id, name, img
                }
            })
            setErrorApi(false);
            setPeople(peopleList);
            console.log('false', 'asdf')
        } else {
            setErrorApi(true);
            console.log('true', 'asdf')
        }
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

export default withErrorApi(PeoplePage);
