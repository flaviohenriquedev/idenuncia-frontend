'use client'
import {useEffect, useState} from "react";

import styles from './Denounced.module.css'
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import {Company} from "@/class/Company";

export default function Denounced() {

    const [company, setCompany] = useState<Company[] | any>();
    const [companySelected, setCompanySelected] = useState<Company>();

    useEffect(() => {
        async function getCompany() {
            const response = await fetch("http://localhost:8081/api/v1/company/findall", {
                cache: "no-store"
            });
            const data = await response.json();
            setCompany(data);
        }
        if (!company) {
            getCompany();
        }
    }, []);

    function selectCompany(value: Company) {
        setCompanySelected(value)
    }

    return (
        <div className={styles.denounced_container}>
            <Select
                onChange={selectCompany}
                labelText="Denunciado"
                data={company}/>

            <Input
                labelText="Cidade"
                name="email"
                type="email"
                textTransform="uppercase"
                value={companySelected ? companySelected.city.name : ''}
                autoComplete
                disabled/>

            <Input
                labelText="Estado"
                name="phone"
                type="phone"
                value={companySelected ? companySelected.city.state.name : ''}
                maxWidth="259px"
                textTransform="uppercase"

                disabled/>
        </div>
    )
}