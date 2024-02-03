import { useState } from "react"
import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody"
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter"
import { PasswordGeneratorHead } from "../PasswordGeneratorHeader/PasswordGeneratorHead"
import s from "./style.module.css"

export function PasswordGeneratorCard() {
    const [password, setPassword] = useState('Amazing Password');
    return <div className={s.root}>
        <div className={s.main}>
            <PasswordGeneratorHead />
            <PasswordGeneratorBody onSubmit={setPassword} />
        </div>
        <PasswordGeneratorFooter password={password} />

    </div>
}