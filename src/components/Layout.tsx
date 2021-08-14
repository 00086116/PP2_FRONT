import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Header from './Commons/Header'
export default function Layout(prop: { children: JSX.Element }): JSX.Element {
    return (
        <Provider store={store}>
            <Header />
            {prop.children}
        </Provider>
    )
}
