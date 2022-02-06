export default function Work(props) {
    return React.createElement(
        "div",
        { className: props.requiredWorkClassName, onAnimationEnd: props.workAnimationEnded },
        React.createElement(
            "div",
            { className: "work_exp_container" },
            React.createElement(
                "h1",
                null,
                React.createElement(
                    "a",
                    { className: "company_web_a",
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
                { className: "work_desp" },
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
            ),
            React.createElement(
                "h4",
                { className: "work_duration" },
                "MAR. 2019 - DEC. 2021"
            )
        ),
        React.createElement(
            "div",
            { className: "work_exp_container" },
            React.createElement(
                "h1",
                null,
                React.createElement(
                    "a",
                    { className: "company_web_a",
                        title: "E-Innovation Inc. LinkedIn Website",
                        href: "https://www.linkedin.com/company/e-innovation/",
                        target: "_blank", rel: "noopener noreferrer" },
                    "E-Innovation Inc."
                ),
                ", Montreal"
            ),
            React.createElement(
                "h1",
                { className: "work_title" },
                "Automation Developer Intern"
            ),
            React.createElement(
                "div",
                { className: "work_desp" },
                React.createElement(
                    "p",
                    null,
                    "E-Innovation Inc. was a Montreal based company that was founded by five researches from McGill University. I worked as a automation Developer to research and develop a way of automating the sealing and taping progress for making a new type of electrode, together with a mechanical engineering student."
                )
            ),
            React.createElement(
                "div",
                { className: "intern_video" },
                React.createElement(
                    "h2",
                    null,
                    "Video of the sealing machine"
                ),
                React.createElement(
                    "video",
                    { width: "50%", height: "400", controls: true },
                    React.createElement("source", { src: "resources/media/job.mp4", type: "video/mp4" }),
                    "Your browser does not support the video tag."
                )
            ),
            React.createElement(
                "h4",
                { className: "work_duration" },
                "MAR.2017 - AUG. 2017"
            )
        )
    );
}