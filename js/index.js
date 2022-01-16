// React dependency introduction
function Profile() {
    return React.createElement(
        "div",
        null,
        React.createElement("img", { src: "resources/img/progile.jpg", alt: "Smiley face", className: "box-img" }),
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
                    { href: "https://www.linkedin.com/in/mingruizhangee/" },
                    " ",
                    React.createElement("i", { className: "fa fa-linkedin", "aria-hidden": "true" }),
                    " "
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "resources/pdf/Resume Mingrui Zhang.pdf" },
                    " ",
                    React.createElement("i", { className: "fa fa-file-text", "aria-hidden": "true" }),
                    " "
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "mailto:mingrui.zhang@mail.mcgill.ca" },
                    " ",
                    React.createElement("i", { className: "fa fa-envelope", "aria-hidden": "true" }),
                    " "
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(Profile, null), document.getElementById("profile"));