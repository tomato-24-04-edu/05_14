import React, { useState, useEffect } from "react";
import { GameContainer, ImgContainer, ImgBox, Game, Round } from "./styled";
import p0 from "../../assets/images/aoi.jpg"
import p1 from "../../assets/images/hamabe.gif"
import p2 from "../../assets/images/hirose.jpg"
import p3 from "../../assets/images/honda.jpg"
import p4 from "../../assets/images/kanna.gif"
import p5 from "../../assets/images/kasumi.jpg"
import p6 from "../../assets/images/keiko.jpg"
import p7 from "../../assets/images/komatsu.jpg"
import p8 from "../../assets/images/kyouko.jpg"
import p9 from "../../assets/images/mai.jpg"
import p10 from "../../assets/images/mei.jpg"
import p11 from "../../assets/images/nanase.jpg"
import p12 from "../../assets/images/satomi.gif"
import p13 from "../../assets/images/ueto.jpg"
import p14 from "../../assets/images/wonyoung.jpg"
import p15 from "../../assets/images/yui.jpg"

const candidate = [
    {
        key: 0,
        name: "아오이 유우",
        src: p0
    },
    {
        key: 1,
        name: "하마베 미나미",
        src: p1
    },
    {
        key: 2,
        name: "히로세 스즈",
        src: p2
    },
    {
        key: 3,
        name: "혼다 츠바사",
        src: p3
    },
    {
        key: 4,
        name: "하시모토 칸나",
        src: p4
    },
    {
        key: 5,
        name: "아리무라 카스미",
        src: p5
    },
    {
        key: 6,
        name: "키타가와 케이코",
        src: p6
    },
    {
        key: 7,
        name: "고마츠 나나",
        src: p7
    },
    {
        key: 8,
        name: "후카다 쿄코",
        src: p8
    },
    {
        key: 9,
        name: "시라이시 마이",
        src: p9
    },
    {
        key: 10,
        name: "나가노 메이",
        src: p10
    },
    {
        key: 11,
        name: "니시노 나나세",
        src: p11
    },
    {
        key: 12,
        name: "이시하라 사토미",
        src: p12
    },
    {
        key: 13,
        name: "우에토 아야",
        src: p13
    },
    {
        key: 14,
        name: "장원영",
        src: p14
    },
    {
        key: 15,
        name: "아라가키 유이",
        src: p15
    },
]


export const Main = () => {
    const [candy, setCandy] = useState(candidate);
    const [winCandy, setWinCandy] = useState([]);
    const [round, setRound] = useState(1);
    const [game, setGame] = useState(candidate?.length);

    useEffect(() => {
        setCandy(
            candidate
                .map((c) => {
                    return { key: c.key, name: c.name, src: c.src, order: Math.random() };
                })
                .sort((l, r) => {
                    return l.order - r.order;
                })
        );
    }, [])

    const handleClick = (e) => {
        setCandy((prev) => {
            const temp = prev.splice(0, 2)
            return prev.filter((el, i) => el.key !== temp.key)
        })
        setRound((prev) => prev + 1);
        setWinCandy((prev) => [...prev, e])
    }

    useEffect(() => {
        if (game === 1) {
            return;
        }
        if (candy.length === 0) {
            setRound(1);
            setWinCandy([]);
            setCandy(winCandy);
            setGame((prev) => prev / 2)
        }
    }, [round])

    return (
        <>
            {
                game === 1 ? <Game>Win!</Game> :
                    game === 2 ? <Game>決勝</Game> : <Game>{game}{"강"}</Game>
            }
            {game > 2 &&
                <Round>{round}{"Round"}</Round>
            }
            <GameContainer>
                {candy.map((e, i) => {
                    if (i > 1) return;
                    return (
                        <ImgContainer onClick={() => handleClick(e)}>
                            <ImgBox src={e.src} />
                            {e.name}
                        </ImgContainer>
                    )
                })}
            </GameContainer>
        </>
    )

}