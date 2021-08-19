import * as React from 'react'
import { useDispatch } from 'react-redux'
import SEO from '../components/Commons/SEO'
import { login } from '../redux/thunks/security'

const HomePage = ():JSX.Element => {

    return (
        <>
            <SEO title="Home" />
            <h1>Citas,perfil,etc</h1>
        </>
    )
}

export default HomePage
