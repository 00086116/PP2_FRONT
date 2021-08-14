import * as React from 'react'
import { useDispatch } from 'react-redux'
import SEO from '../components/Commons/SEO'
import { login } from '../redux/thunks/security'

const IndexPage = ():JSX.Element => {
    const dispatch = useDispatch()
    dispatch(login())
    return (
        <>
            <SEO title="Clinica" />
            <h1>HOME</h1>
        </>
    )
}

export default IndexPage
