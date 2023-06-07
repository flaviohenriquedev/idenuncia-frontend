'use client';

import {useContext} from "react";
import styles from './AnonimousContainer.module.css'
import {ComplaintContext} from "@/context/ComplaintContext";

export default function AnonymousContainer() {
    const { anony, setAnony, setName, setEmail, setPhone} = useContext(ComplaintContext);

    function changeAnony() {
        const newAnony = !anony;
        setAnony(newAnony);
        setName("");
        setEmail("");
        setPhone("");
    }

    return (
        <div className={styles.anonymous_container}>
            <div className={`${anony ? styles.anonymous_checkbox_clicked : styles.anonymous_checkbox}`}
                 onClick={changeAnony}>
                {anony ? "Anonimato garantido!" : "Quero fazer uma denuncia anônima"}
            </div>
            <div className={styles.anonymous_text}>
                <p><i>Não se preocupe, seus dados pessoais informados aqui permanecerão em completo sigilo.
                    <br/>
                    Usaremos apenas para um possível retorno.</i></p>
            </div>
        </div>
    )
}
