'use client'

import styles from './Select.module.css'

type SelectProps = {
    labelText?: string;
    onChange?: (e) => void;
    data: any[];
}

export default function Select(props: SelectProps) {

    function renderOptions() {
        if(props.data) {
            return props.data.map(d => {
                return <option key={d.id}
                               value={JSON.stringify(d)}
                               data-object={JSON.stringify(d)}
                >{d.name} {d.description}</option>
            })
        }
    }

    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedIndex = event.target.selectedIndex;
        const selectedOptionData = event.target.options[selectedIndex].dataset.object;
        const selectedOption = selectedOptionData ? JSON.parse(selectedOptionData) : null;

        if (props.onChange) {
            props.onChange(selectedOption);
        }
    }

    return (
        <div className={styles.select_container}>
            <label>{props.labelText}</label>
            <select defaultValue={'DEFAULT'} onChange={handleSelectChange}>
                <option value="DEFAULT" disabled>SELECIONE</option>
                {renderOptions()}
            </select>
        </div>
    )
}