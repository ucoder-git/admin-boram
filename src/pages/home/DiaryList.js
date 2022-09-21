import styles from './Home.module.css'
import React from 'react';

export default function DiaryList({ diaries }) {
    return (
        <>
            {
                diaries.map((item) => {
                    return (
                        <li key={item.id}>
                            <strong className={styles.title}>{item.title}</strong>
                            <p className={styles.text}>{item.text}</p>
                        </li>
                    )
                })
            }
        </>
    )
}