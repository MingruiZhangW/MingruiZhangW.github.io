export default function Profile(props) {
    return React.createElement(
        "div",
        { className: props.requiredProfileClassName, onAnimationEnd: props.profileAnimationEnded },
        React.createElement(
            "div",
            { className: "info_center" },
            React.createElement("img", { src: "resources/img/profile.jpg", alt: "Smiley face" }),
            React.createElement(
                "h1",
                null,
                " Mingrui Zhang"
            ),
            React.createElement(
                "h5",
                null,
                " McGill University"
            ),
            React.createElement(
                "h5",
                null,
                " Bachelor of Electrical Engineering"
            ),
            React.createElement(
                "h5",
                null,
                " Software Developer"
            ),
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { title: "Ming's LinkedIn",
                            href: "https://www.linkedin.com/in/mingruizhangee/",
                            target: "_blank", rel: "noopener noreferrer" },
                        React.createElement("i", { className: "fa fa-linkedin", "aria-hidden": "true" })
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { title: "Ming's Resume",
                            href: "resources/pdf/Resume Mingrui Zhang.pdf",
                            target: "_blank", rel: "noopener noreferrer" },
                        React.createElement("i", { className: "fa fa-file-text", "aria-hidden": "true" })
                    )
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { title: "Email me",
                            href: "mailto:mingrui.zhang@mail.mcgill.ca" },
                        React.createElement("i", { className: "fa fa-envelope", "aria-hidden": "true" })
                    )
                )
            )
        )
    );
}