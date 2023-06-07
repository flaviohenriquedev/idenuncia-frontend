import styles from './Form.module.css'
import AnonymousContainer from "@/app/public/complaint/AnonymousContainer";
import PersonalData from "@/app/public/complaint/PersonalData";
import Denounced from "@/app/public/complaint/Denounced";
import ComplaintArea from "@/app/public/complaint/ComplaintArea";
import Buttons from "@/app/public/complaint/Buttons";

export default function Form() {
    return (
        <form className={styles.form}>
            <AnonymousContainer/>
            <hr className="idn_hr"/>
            <PersonalData/>
            <hr className="idn_hr"/>
            <Denounced/>
            <hr className="idn_hr"/>
            <ComplaintArea/>
            <hr className="idn_hr"/>
            <div className={styles.buttons_container}>
                <Buttons/>
            </div>
        </form>
    )
}