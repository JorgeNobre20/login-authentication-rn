import React,{ useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/Auth';

import Folder from '../../components/Folder';

import {
    Container,
    Header,
    Title,
    LogoutButton,
    LogoutText,
    FoldersList
} from './styles';

interface IFolderList {
    key: number;
    title: string;
    subtitle: string;
    background: string;
    color: string;
}


const foldersList: IFolderList[] = [
    {
        key: 1,
        title: 'Mobile Apps',
        subtitle: 'December 20.2020',
        background: '#EEF7FE',
        color: '#415EB6'
    }, {
        key: 2,
        title: 'SVG Icons',
        subtitle: 'Decemeber 14.2020',
        background: '#FFFBEC',
        color: '#FFB110'
    }, {
        key: 3,
        title: 'Proto Types',
        subtitle: 'November 22.2020',
        background: '#FEEEEE',
        color: '#F45656'
    },
    {
        key: 4,
        title: 'Avatars',
        subtitle: 'November 10.2020',
        background: '#F0FFFF',
        color: '#34DEDE'
    },
    {   
        key: 5,
        title: 'Design',
        subtitle: 'December 20.2020',
        background: '#EEF7FE',
        color: '#415EB6'
    }, {
        key: 6,
        title: 'Portfolio',
        subtitle: 'Decemeber 14.2020',
        background: '#FFFBEC',
        color: '#FFB110'
    }, {
        key: 7,
        title: 'References',
        subtitle: 'November 22.2020',
        background: '#FEEEEE',
        color: '#F45656'
    },
    {
        key: 8,
        title: 'Clients',
        subtitle: 'November 10.2020',
        background: '#F0FFFF',
        color: '#34DEDE'
    }
];


const Home: React.FC = () => {

    const {signOut} = useContext(AuthContext);

    function handleLogout(){
        signOut();
    }

    return (
        <Container>
            <Header>

                <Title>Your Dribbox</Title>

                <LogoutButton onPress={handleLogout}>
                    <LogoutText>Sair</LogoutText>
                    <FontAwesome name="power-off" size={18} color="red" />
                </LogoutButton>
            </Header>
            <FoldersList>
                {
                    foldersList.map(folder =>
                        (
                            <Folder key={String(folder.key)} title={folder.title} background={folder.background} subtitle={folder.subtitle} color={folder.color} />
                        ))
                }

            </FoldersList>
        </Container>

    );
}

export default Home;