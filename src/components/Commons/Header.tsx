import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

export default function Header(): JSX.Element {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Button variant="contained" style={{ backgroundColor: 'blue' }}>
                <Link
                    to="/login"
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    Iniciar Sesion
                </Link>
            </Button>
        </div>
    )
}
