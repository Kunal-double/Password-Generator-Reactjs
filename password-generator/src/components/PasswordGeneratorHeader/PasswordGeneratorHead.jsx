import s from "./style.module.css";
import lockIcon from '../../assests/lock.svg'

export function PasswordGeneratorHead() {
    return (
        <div className={s.root}>
            <div div className={s.title}>
                Password Generator</div>
            <img src={lockIcon} className={s.icon} alt='LockIcon' />
        </div>

    );

}