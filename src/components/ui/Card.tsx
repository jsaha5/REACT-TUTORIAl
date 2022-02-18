import { ReactNode } from 'react';
import './Card.css'
interface Props {
    className: string;
    children: ReactNode
}
export default function Card (props: Props) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}