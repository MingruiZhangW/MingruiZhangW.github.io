export default function Interests(props) {
    return React.createElement(
        "div",
        { className: props.requiredInterestsClassName, onAnimationEnd: props.interestsAnimationEnded },
        React.createElement(
            "div",
            { className: "interests_info" },
            React.createElement(
                "h1",
                { className: "zi_de_title" },
                "\u81EA\u5F97\u7434\u793E"
            ),
            React.createElement("img", { className: "zi_de_logo", src: "resources/img/zi_de_qin_she.png", alt: "ZIDE logo" }),
            React.createElement(
                "h3",
                { className: "zi_de_fan" },
                " Big fan for it!! Try the following piece! "
            ),
            React.createElement(
                "div",
                { className: "holds-the-iframe" },
                React.createElement("iframe", { width: "60%",
                    height: "310px",
                    src: "https://www.youtube.com/embed/w69vHX6ilAs",
                    title: "Plum blossom in ancient China",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: true })
            ),
            React.createElement(
                "h1",
                { className: "du_fu_ming_yue" },
                "\u7389 \u4E8C \u79CB \u9752 ",
                React.createElement("br", null),
                "\u4EBA \u5341 \u5C3D \u5C71 ",
                React.createElement("br", null),
                "\u4F55 \u56DB \u6C5F \u9690 ",
                React.createElement("br", null),
                "\u5904 \u6865 \u5357 \u9690 ",
                React.createElement("br", null),
                "\u6559 \u660E \u8349 \u6C34 ",
                React.createElement("br", null),
                "\u5439 \u6708 \u6728 \u8FE2 ",
                React.createElement("br", null),
                "\u7BAB \u591C \u51CB \u8FE2 ",
                React.createElement("br", null)
            ),
            React.createElement(
                "a",
                { className: "zi_de_bilibili",
                    title: "Zide Bilibili \u6885\u82B1\u4E09\u5F04",
                    href: "https://www.bilibili.com/video/BV1eJ411V7nW?spm_id_from=333.999.0.0",
                    target: "_blank", rel: "noopener noreferrer" },
                React.createElement("img", { className: "bilibili_logo",
                    src: "resources/img/bilibili_logo_blue.svg", alt: "Bilibili logo" })
            )
        ),
        React.createElement(
            "div",
            { className: "interests_info" },
            React.createElement(
                "h1",
                { className: "sound_of_silence_title" },
                " The Sound Of Silence"
            ),
            React.createElement(
                "div",
                { className: "holds-the-iframe" },
                React.createElement("iframe", { width: "60%",
                    height: "310px",
                    src: "https://www.youtube.com/embed/NAEppFUWLfc",
                    title: "Sound of Silence Live",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: true })
            ),
            React.createElement(
                "h3",
                { className: "cover_version_sos" },
                React.createElement(
                    "a",
                    { className: "sound_of_silence_wang_xi",
                        title: "Sound of Silence Cover Version Wang xi...",
                        href: "https://youtu.be/x6-2ER1IVzo",
                        target: "_blank", rel: "noopener noreferrer" },
                    "Here's my favorite cover version"
                )
            ),
            React.createElement(
                "audio",
                { controls: true },
                React.createElement("source", { src: "resources/media/soundofsclience.mp3", type: "audio/mpeg" }),
                "Your browser does not support the audio element."
            )
        )
    );
}