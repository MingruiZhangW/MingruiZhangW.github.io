export default function Interests(props) {
    return (
        <div className={props.requiredInterestsClassName} onAnimationEnd={props.interestsAnimationEnded}>
            <div className="interests_info">
                <h1 className="zi_de_title">
                    自得琴社
                </h1>
                <img className="zi_de_logo" src="resources/img/zi_de_qin_she.png" alt="ZIDE logo"/>
                <h3 className="zi_de_fan"> Big fan for it!! Try the following piece! </h3>
                <div className="holds-the-iframe">
                    <iframe width="60%"
                            height="310px"
                            src="https://www.youtube.com/embed/w69vHX6ilAs"
                            title="Plum blossom in ancient China"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
                <h1 className="du_fu_ming_yue">
                    玉 二 秋 青 <br/>
                    人 十 尽 山 <br/>
                    何 四 江 隐 <br/>
                    处 桥 南 隐 <br/>
                    教 明 草 水 <br/>
                    吹 月 木 迢 <br/>
                    箫 夜 凋 迢 <br/>
                </h1>
                <a className="zi_de_bilibili" 
                    title="Zide Bilibili 梅花三弄"
                    href="https://www.bilibili.com/video/BV1eJ411V7nW?spm_id_from=333.999.0.0"
                    target="_blank" rel="noopener noreferrer">
                        <img className="bilibili_logo"
                             src="resources/img/bilibili_logo_blue.svg" alt="Bilibili logo"/>
                </a>
            </div>
            <div className="interests_info">
                <h1 className="sound_of_silence_title"> The Sound Of Silence</h1>
                <div className="holds-the-iframe">
                    <iframe width="60%"
                            height="310px"
                            src="https://www.youtube.com/embed/NAEppFUWLfc"
                            title="Sound of Silence Live"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
                <h3 className="cover_version_sos">
                    <a className="sound_of_silence_wang_xi" 
                       title="Sound of Silence Cover Version Wang xi..."
                       href="https://youtu.be/x6-2ER1IVzo"
                       target="_blank" rel="noopener noreferrer">
                            Here's my favorite cover version
                    </a>
                </h3>
                <audio controls>
                    <source src="resources/media/soundofsclience.mp3" type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}