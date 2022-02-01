// Custon hook
import { useState } from "react"

const useSelect = ({ initialState, options }) => {
    // state del custon hook
    const [state, setState] = useState('')

    const SelectNews = () => (
        <select
            className="browser-default"
        >
            <option
                value=""
            >
                Seleccione
            </option>

        </select>
    )

    return [state, SelectNews]
}

export default useSelect
