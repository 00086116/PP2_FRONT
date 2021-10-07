import * as React from 'react'

import SEO from '../components/Commons/SEO'
import {  useSelector } from 'react-redux'

import QRCode from "react-qr-code";
const qrPage = ():JSX.Element => {

    const user = useSelector(app => app.security.user)




    return (
        <>
            <SEO title="QR CODE" />
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <p style={{fontWeight:"bold"}}>Paciente: {user.username}</p><br></br>

                <QRCode value="hey" />

            </div>

        </>
    )
}

export default qrPage
