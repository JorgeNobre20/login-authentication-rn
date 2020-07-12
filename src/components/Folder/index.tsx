import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FolderContainer, FolderHeader, FolderDescription , Title, SubTitle } from './styles';

export interface IFolder{
    title: string;
    subtitle: string;
    color: string;
    background: string;
}

const Folder: React.FC<IFolder> = ({ color,  background, title, subtitle }) => {
    return(
        <FolderContainer background={background}>
            <FolderHeader>
                <Ionicons name="ios-folder-open" size={28} color={color} />
                <MaterialCommunityIcons name="dots-vertical" size={28} color={color} />
            </FolderHeader>

            <FolderDescription>
                <Title color={color}>{title}</Title>
                <SubTitle color={color}>{subtitle}</SubTitle>
            </FolderDescription>
        </FolderContainer>
    )
}

export default Folder;