import React from "react";

import * as S from "./style";

import User from "../../../assets/images/익명.png";
import Comment from "../../../assets/images/chat.png";
import Like from "../../../assets/images/like.png";

function LatestPage(): React.ReactElement {
    return(
        <S.View>
            <S.Logo>로고</S.Logo>
            <S.CategoryWrapper>
                <S.CategoryItem>
                    <S.ItemTitle>인기반</S.ItemTitle>
                </S.CategoryItem>
                <S.CategoryItem>
                    <S.ItemTitle>최신반</S.ItemTitle>
                </S.CategoryItem>
                <S.CategoryItem>
                    <S.ItemTitle>운동</S.ItemTitle>
                </S.CategoryItem>
                <S.CategoryItem>
                    <S.ItemTitle>게임</S.ItemTitle>
                </S.CategoryItem>
                <S.CategoryItem>
                    <S.ItemTitle>덕질</S.ItemTitle>
                </S.CategoryItem>
                <S.CategoryItem>
                    <S.ItemTitle>고민</S.ItemTitle>
                </S.CategoryItem>
            </S.CategoryWrapper>
            <S.WritingComponents>
                <S.UserImg src={User} />
                <S.UserContainer>
                    <S.UserName>임세현</S.UserName>
                    <S.GAContainer>
                        <S.Gender>남자,</S.Gender>
                        <S.Age>16세</S.Age>
                    </S.GAContainer>
                </S.UserContainer>
            </S.WritingComponents>
            <S.Context>
            저랑 친구하실 분?
                <S.AlarmContainer>
                    <S.Img src={Comment} />
                    <S.Num>2</S.Num>
                    <S.Img src={Like} />
                    <S.Num>10</S.Num>
                </S.AlarmContainer>
            </S.Context>
        </S.View>
    );
}

export default LatestPage;