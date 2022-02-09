export default function Contact(props) {
    return (
        <div className={props.requiredContactClassName} onAnimationEnd={props.contactAnimationEnded}>
            <div className="contact_info_center">
                <h1>Contact Me</h1>
                <ul className="contact_method_list">
                    <li className="contact_method_list_item">
                        <a className="contact_method_list_a_github"
                           href="https://github.com/MingruiZhangW"
                           target="_blank" rel="noopener noreferrer">
                               <i className="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="contact_method_list_item">
                        <a className="contact_method_list_a_linkedin"
                           href="https://www.linkedin.com/in/mingruizhangee/"
                           target="_blank" rel="noopener noreferrer">
                               <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="contact_method_list_item">
                        <span className="contact_method_list_span">
                            &nbsp; mingrui.zhang@mail.mcgill.ca
                        </span>
                    </li>
                    <li className="contact_method_list_item">
                        <span className="contact_method_list_span">
                            &nbsp; +1-514-571-4228
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}