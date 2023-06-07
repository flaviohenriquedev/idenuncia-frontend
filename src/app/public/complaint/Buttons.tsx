'use client'

import styles from './Buttons.module.css'
import { useRouter  } from "next/navigation";
import Button from "@/components/button/Button";


export default function Buttons() {

    const route = useRouter();

    function cancel(e) {
        e.preventDefault();
        route.push("/");
    }

    return (
        <div className={styles.buttons}>
            <Button
                text="Cancelar"
                className="idn_btn_danger"
                action={cancel}
            />

            <Button
                text="Limpar Formulário"
                className="idn_btn_warning"
                action={cancel}
            />

            <Button
                text="Enviar"
                className="idn_btn_success"
                action={cancel}
            />

        </div>
    )
}