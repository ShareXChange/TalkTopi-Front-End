import styled from "styled-components";

export const View = styled.div`
    width: 360px;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const CategoryWrapper = styled.div`
    width: 100%;
    height: 48px;
    padding-top: 12px;
    display: flex;
    flex-wrap: nowrap;
`;

export const CategoryItem = styled.div`
    width: 43px;
    height: 36px;
    margin-left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    :first-child{
        border-bottom: 2px solid #4AD7B7;
    }
`;

export const ItemTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

export const WritingComponents = styled.div`
    width: 320px;
    margin-top: 16px;
    display: flex;
    flex-direction: row;
`;

export const UserContainer = styled.div`
    width: 272px;
    height: 24px;
    margin-top: 5px;
    padding-left: 8px;
    display: flex;
    flex-direction: row;
`;

export const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`;

export const UserName = styled.div`
    max-width: 100px;
    font-weight: bold;
    font-size: 24px;
    margin-right: 4px;
`;

export const GAContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Gender = styled.span`
    height: 16px;
    font-size: 16px;
`;

export const Age = styled.span`
    height: 16px;
    font-size: 16px;
`;

export const Context = styled.div`
    width: 237px;
    margin-top: 4px;
    margin-left: 76px;
    margin-right: 35px;
    overflow: hidden;
`;

export const AlarmContainer = styled.div`
    width: 100%;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 4px;
`;

export const Num = styled.div`
    color: #666680;
    font-size: 12px;
    margin-right: 16px;
`;