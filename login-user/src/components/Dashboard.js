import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {

    const auth = useAuth()

    return (
        <div>
            Dashboard
            <button onClick={auth.logout}>
                Log Out
            </button>
        </div>
    )
}
