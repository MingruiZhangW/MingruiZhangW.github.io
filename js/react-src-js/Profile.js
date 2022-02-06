export default function Profile(props) {
    return (
        <div className={props.requiredProfileClassName} onAnimationEnd={props.profileAnimationEnded}>
            <div className="info_center">
                <img src="resources/img/profile.jpg" alt="Smiley face"></img>
                <h1> Mingrui Zhang</h1>
                <h5> McGill University</h5>
                <h5> Bachelor of Electrical Engineering</h5>
                <h5> Software Developer</h5>
                <ul>
                    <li>
                        <a title="Ming's LinkedIn"
                           href="https://www.linkedin.com/in/mingruizhangee/"
                           target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a title="Ming's Resume"
                           href="resources/pdf/Resume Mingrui Zhang.pdf"
                           target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-file-text" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a title="Email me"
                           href="mailto:mingrui.zhang@mail.mcgill.ca">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}