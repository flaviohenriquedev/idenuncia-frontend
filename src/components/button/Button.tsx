type ButtonProps = {
    text: string;
    action: (e) => void;
    className: string;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            className={props.className}
            onClick={props.action}>
            {props.text}
        </button>
    )
}