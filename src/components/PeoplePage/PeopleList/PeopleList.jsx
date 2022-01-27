import React from 'react';
import styles from './PeopleList.module.css';

const PeopleList = ({ img, name }) => {
    return (
        <>
            <li className={styles.peopleList__item}>
                <a href="#">
                    <img src={img} alt={name} className={styles.person__photo} />
                    <p>{name}</p>
                </a>
            </li>
        </>
    )
};

export default PeopleList;
