import React, { useState, useEffect, useContext } from 'react';
import { userContext } from './UserContextProvider';
interface Props {
    name: string;
    age: number;
    ismarried: boolean;
    country: Countries;
}

export enum Countries {
    Brazil = "Brazil",
    India = "India"
}


const Person = (props: Props) => {

    const { addUser, users, deleteUser, updateUser } = useContext(userContext)
    const [constantValue, setConstantValue] = useState<string | null>('');
    const [info, setInfo] = useState<boolean | null>(false);
    useEffect(() => {
        setInfo(true)
    }, [])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConstantValue(e?.target.value)
    }
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.country}</p>
            <input onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default Person