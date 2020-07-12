import styled from 'styled-components/native';

interface Props{
    color?: string;
    background?: string;
}

export const FolderContainer = styled.View<Props>`
    flex-direction: column;
    height: 120px;
    width: 158px;
    padding: 10px;
    margin-bottom: 10px;
    background: ${ (props) => props.background };
    border-radius: 20px;
`;

export const FolderHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 0px 5px;
`;

export const FolderDescription = styled.View`
    padding: 0px 5px;
    margin-top: 10px;
`;

export const Title = styled.Text<Props>`
    font-weight: 700;
    font-size: 15px;
    color: ${ (props) => props.color };
`;

export const SubTitle = styled.Text`
    font-size: 10px;
    color: ${ (props) => props.color };
    margin-bottom: 10px;
`;
