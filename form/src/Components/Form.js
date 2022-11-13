import { useState } from 'react'
import './Form.css'

const Form = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>

            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input onChange={handleChange} type="text" name='name' placeholder="Digite seu nome" />
                </div>
                <button type="submit">Enviar</button>
                <div>
                    <label >
                        Email
                        <input type="text" placeholder='Email' />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default Form