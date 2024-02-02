
import s from "./style.module.css"
import copyPasteIcon from '../../assests/copy-paste.svg'
export function PasswordGeneratorFooter() {
    return (
        <div className={s.root}>
            <div>Super Password</div>
            <img className={s.icon} src={copyPasteIcon} alt='copy Paste Icon' />

        </div>
    );
} 