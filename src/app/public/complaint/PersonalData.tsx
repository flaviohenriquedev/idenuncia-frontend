'use client'

import styles from './PersonalData.module.css'
import Input from "@/components/input/Input";
import {useContext} from "react";
import {ComplaintContext} from "@/context/ComplaintContext";


export default function PersonalData() {

    const {
        anony,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone
    } = useContext(ComplaintContext)

    return (
        <div className={styles.personal_data_container}>
            <Input
                labelText="Nome completo"
                name="compete_name"
                type="text"
                textTransform="uppercase"
                value={name}
                onChange={setName}
                disabled={anony}/>

            <Input
                labelText="Email"
                name="email"
                type="email"
                textTransform="lowercase"
                value={email}
                onChange={setEmail}
                disabled={anony}
                autoComplete/>

            <Input
                labelText="Telefone (com DDD)"
                name="phone"
                type="phone"
                value={phone}
                onChange={setPhone}
                disabled={anony}
                maxWidth="259px"/>
        </div>
    )
}