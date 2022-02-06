export default function Work(props) {
    return React.createElement(
        "div",
        { className: props.requiredWorkClassName, onAnimationEnd: props.workAnimationEnded },
        React.createElement(
            "div",
            { className: "work_sfl_container" },
            React.createElement(
                "h1",
                null,
                React.createElement(
                    "a",
                    { className: "sfl_web_a",
                        title: "Savoir-faire Linux Website",
                        href: "https://savoirfairelinux.com/en",
                        target: "_blank", rel: "noopener noreferrer" },
                    "Savoir-faire Linux"
                ),
                " (",
                React.createElement(
                    "a",
                    { className: "jami_web_a",
                        title: "Jami Website",
                        href: "https://jami.net/",
                        target: "_blank", rel: "noopener noreferrer" },
                    "Jami"
                ),
                " Team), Montreal"
            ),
            React.createElement(
                "h1",
                { className: "work_title" },
                "Software Developer"
            ),
            React.createElement("img", { className: "jami_logo_svg", src: "resources/img/jami_logo.svg", alt: "Jami logo" }),
            React.createElement(
                "div",
                { className: "work_sfl_desp" },
                React.createElement(
                    "p",
                    null,
                    "Savoir-faire Linux is specialized in open source software and digital electronics. Jami, as one of its products, is a SIP-compatible distributed peer-to-peer softphone and SIP-based instant messenger for multiple platforms. I worked as a software developer to mainly assist the team in designing and developing Jami clients on multi-platform. I also maintained and managed the CI/CD systems (Jenkins) for Jami clients. Managing Jami dependencies to build natively on Windows was a part of my job as well."
                )
            ),
            React.createElement(
                "h3",
                null,
                React.createElement(
                    "a",
                    { className: "jami_gitlab_web_a",
                        title: "Gitlab Repo",
                        href: "https://git.jami.net/savoirfairelinux/jami-project/-/wikis/home",
                        target: "_blank", rel: "noopener noreferrer" },
                    React.createElement("i", { className: "fa fa-gitlab", "aria-hidden": "true" })
                )
            )
        )
    );
}