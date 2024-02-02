import s from "./style.module.css"
export function PasswordGeneratorBody() {
    return <form>
        <div className={s.grid_container}>
            <div className={s.grid_item}>
                Size
                <select defaultValue={15}>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                </select>
            </div>
            <div className={s.grid_item}>
                Uppercase
                <input type='checkbox' defaultChecked />
            </div>
            <div className={s.grid_item}>
                Number
                <input type='checkbox' defaultChecked />
            </div>
            <div className={s.grid_item}>
                Specials
                <input type='checkbox' defaultChecked />
            </div>
        </div>
        <div className={s.btn_container}>
            <button className={s.btn_generate}> GENERATE </button>
        </div>
    </form>
}