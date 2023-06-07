import Form from "@/app/public/complaint/Form";

import styles from './page.module.css'
import {ComplaintContextProvider} from "@/context/ComplaintContext";


export default function ComplaintPage() {
    return (
        <ComplaintContextProvider>
            <div className={styles.complaint_contaniner}>
                <Form/>
            </div>
        </ComplaintContextProvider>
    )
}