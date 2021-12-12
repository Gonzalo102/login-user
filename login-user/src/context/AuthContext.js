import React, {useContext, useEffect, useState} from 'react'
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
 }  from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    
    async function signup ( email, password){
        try{
            return await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log (error.message)
        }
    }

    async function login (email, password) {
        try{
            return await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log (error.message)
        }
    }

    async function logout () {
        await signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoading(false)
        })
            
        return unsubscribe
    },[])
    

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
