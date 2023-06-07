'use client';

import styles from "./ComplaintArea.module.css";
import Input from "@/components/input/Input";
import Select from "@/components/select/Select";
import {useEffect, useState} from "react";
import {ComplaintType} from "@/class/ComplaintType";

export default function ComplaintArea() {

    const [complaintType, setComplaintType] = useState<ComplaintType[] | any>()
    const [complaintTypeSelected, setComplaintTypeSelected] = useState<ComplaintType | null>(null)

    useEffect(() =>{
        async function getAllComplaintType() {
            const response = await fetch("http://localhost:8081/api/v1/complaint-type/findall", {
                cache: "no-store"
            })
            const data = await response.json();
            setComplaintType(data)
        }

        if(!complaintType) {
            getAllComplaintType();
        }
    }, [])

    function selectComplaintType(value: ComplaintType) {
        setComplaintTypeSelected(value);
    }

    return (
        <div>
            <div className={styles.complaintarea_container}>
                <Select labelText="Tipo de denúncia"
                        onChange={selectComplaintType}
                        data={complaintType}/>

                <Input
                    labelText="Onde ocorreu o fato?"
                    name="email"
                    type="email"
                    textTransform="lowercase"
                />

                <Input
                    labelText="Data do fato"
                    name="fact_date"
                    type="date"
                    placeholder="DD/MM/AAAA"
                    maxWidth="259px"
                />

                <Input
                    labelText="Código do B.O. (caso tenha)"
                    name="bo_code"
                    type="text"
                    maxWidth="259px"
                />
            </div>
            <div>
                <label className={styles.label}>Mensagem</label>
                <textarea className={styles.textarea} rows="15"></textarea>
            </div>
        </div>
    );
}
