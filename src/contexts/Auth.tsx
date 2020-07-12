import React,{ createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

interface IUser{
    email: string;
    password: string;
}

interface IAuthContext{
    signed: boolean;
    user: IUser | null;
    signIn(user: IUser): void;
    signOut(): void;
    loading: boolean;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider:React.FC = ({ children }) => {

    const [user,setUser] = useState<IUser | null>(null);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {

        async function verifyng(){
            const email = await AsyncStorage.getItem('DB@:email');
            const password = await AsyncStorage.getItem('DB@:password');

            if(email && password){
                setUser({ email, password });
            }

            setLoading(false);
        }

        verifyng();

    },[]);
    async function signIn(user: IUser){

        await AsyncStorage.setItem('DB@:email', user.email);
        await AsyncStorage.setItem('DB@:password', user.password);
        setUser(user);
    }

    async function signOut(){

        setUser(null);
        await AsyncStorage.clear();

    }

    return(
        <AuthContext.Provider value={{ signed:!!user , user , signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
