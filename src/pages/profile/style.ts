import styled from "styled-components";

export const View = styled.div`
    width: 360px;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

export const HeadContainer = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
`;

export const UserImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 30px;
`;

export const CameraImg = styled.img`
    position: absolute;
    left: 98px;
    top: 118px;
`;

export const MinimumInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const UserName = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
`;

export const Age = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-left: 20px;
`;

export const EditProfileBtn = styled.div`
    width: 200px;
    font-size: 14px;
    font-weight: bold;
    color: #C1C1CD;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    margin-right: 15px;
`;

export const BasicInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 26px;
    display: flex;
    flex-direction: column;
`;

export const MBTIContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: #4AD7B7;
    margin-left: 66px;
`;

export const TypeContainer = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
`;

export const Type = styled.div`
    color: #4AD7B7;
    font-size: 20px;
    font-weight: blod;
    margin-left: 60px;
    :first-child{
        margin-left: 66px;
    }
`;

export const IntroduceContainer = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 30px;
`;

export const Introduce = styled.div`
    color: #000;
    font-size: 16px;
    font-weight: blod;
    text-align: center;
`;

export const Underline = styled.hr`
    color: #E0E0E6;
    width: 300px;
    height: 1px;
    margin-top: 15px;
`;

export const ValueContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
`;

export const LikeContainer = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 92px;
`;

export const ImgContainer = styled.div`
    margin-bottom: 3px;
`;

export const Name = styled.div`
    color: #000;
    font-size: 12px;
    font-weight: bold;
`;

export const Value = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: bold;
`;

export const VisitorContainer = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GenderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`;

export const GenderBar = styled.div`
    width: 300px;
    height: 30px;
    border: 1px solid #666680;
    border-radius: 15px;
`;

export const DetailContainer = styled.div`
    width: 100%;
`;

export const Detail = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: bold;
`;