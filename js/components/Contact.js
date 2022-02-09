export default function Contact(props) {
    return React.createElement(
        "div",
        { className: props.requiredContactClassName, onAnimationEnd: props.contactAnimationEnded },
        React.createElement(
            "div",
            { className: "contact_info_center" },
            React.createElement(
                "h1",
                null,
                "Contact Me"
            ),
            React.createElement(
                "ul",
                { className: "contact_method_list" },
                React.createElement(
                    "li",
                    { className: "contact_method_list_item" },
                    React.createElement(
                        "a",
                        { className: "contact_method_list_a_github",
                            href: "https://github.com/MingruiZhangW",
                            target: "_blank", rel: "noopener noreferrer" },
                        React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
                    )
                ),
                React.createElement(
                    "li",
                    { className: "contact_method_list_item" },
                    React.createElement(
                        "a",
                        { className: "contact_method_list_a_linkedin",
                            href: "https://www.linkedin.com/in/mingruizhangee/",
                            target: "_blank", rel: "noopener noreferrer" },
                        React.createElement("i", { className: "fa fa-linkedin", "aria-hidden": "true" })
                    )
                ),
                React.createElement(
                    "li",
                    { className: "contact_method_list_item" },
                    React.createElement(
                        "span",
                        { className: "contact_method_list_span" },
                        "\xA0 mingrui.zhang@mail.mcgill.ca"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "contact_method_list_item" },
                    React.createElement(
                        "span",
                        { className: "contact_method_list_span" },
                        "\xA0 +1-514-571-4228"
                    )
                )
            )
        )
    );
}