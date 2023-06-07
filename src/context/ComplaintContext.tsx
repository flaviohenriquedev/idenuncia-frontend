'use client';

import {createContext, useState} from 'react';
import {Complaint} from "@/class/Complaint";

type ComplaintContextProps = {
    anony: boolean;
    setAnony: (value: boolean) => void;
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
}

export const ComplaintContext = createContext<ComplaintContextProps>({
    anony: false,
    setAnony: () => {
    },
    name: "",
    setName: () => {
    },
    email: "",
    setEmail: () => {
    },
    phone: "",
    setPhone: () => {
    },
});

export const ComplaintContextProvider = ({children}) => {
    const complaint = new Complaint();

    const [anony, setAnony] = useState<boolean>(false)
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    complaint.nameDenunciator = name;
    complaint.emailDenunciator = email;
    complaint.phoneDenunciator = phone;

    return (
        <ComplaintContext.Provider value={{
            anony,
            setAnony,
            name,
            setName,
            email,
            setEmail,
            phone,
            setPhone
        }}>
            {children}
        </ComplaintContext.Provider>
    )
}