import react from "react";

import * as S from "./style";

import TestUserImg from "../../assets/images/testprofileimg.png";
import Camera from "../../assets/images/camera.png";
import Like from "../../assets/images/Profile/like.png";
import Visitor from "../../assets/images/Profile/eye.png";

function MyProfilePage(): React.ReactElement {
    return(
        <>
            <S.View>
                <S.HeadContainer>
                    <S.UserImg src={TestUserImg} />
                    <S.CameraImg src={Camera} />
                    <S.MinimumInfo>
                        <S.UserName>박상민</S.UserName>
                        <S.Age>19세</S.Age>
                    </S.MinimumInfo>
                    <S.EditProfileBtn>프로필 수정</S.EditProfileBtn>
                </S.HeadContainer>
                <S.BasicInfoContainer>
                    <S.MBTIContainer>
                        <S.Title>MBTI</S.Title>
                        <S.TypeContainer>
                            <S.Type>I</S.Type>
                            <S.Type>N</S.Type>
                            <S.Type>T</S.Type>
                            <S.Type>P</S.Type>
                        </S.TypeContainer>
                    </S.MBTIContainer>
                    <S.IntroduceContainer>
                        <S.Introduce>나는 대마고 소프트웨어개발과 학생</S.Introduce>
                        <S.Underline />
                    </S.IntroduceContainer>
                    <S.ValueContainer>
                        <S.LikeContainer>
                            <S.ImgContainer>
                                <img src={Like} />
                            </S.ImgContainer>
                            <S.Name>좋아요</S.Name>
                            <S.Value>0</S.Value>
                        </S.LikeContainer>
                        <S.VisitorContainer>
                            <img src={Visitor} />
                            <S.Name>방문자</S.Name>
                            <S.Value>0</S.Value>
                        </S.VisitorContainer>
                    </S.ValueContainer>
                    <S.GenderContainer>
                        <S.GenderBar>

                        </S.GenderBar>
                    </S.GenderContainer>
                </S.BasicInfoContainer>
                <S.DetailContainer>
                    <S.Detail>세부 정보</S.Detail>
                </S.DetailContainer>
            </S.View>
        </>
    );
};

export default MyProfilePage;