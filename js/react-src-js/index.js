// React dependency introduction
function Profile() {
    return (
        <div>
            <img src="resources/img/progile.jpg" alt="Smiley face" className="box-img"></img>
            <h1> Mingrui Zhang</h1>
            <h5> McGill University</h5>
            <h5> Bachelor of Electrical Engineering</h5>
            <h5> Software Developer</h5>
            <ul>
                <li><a href="https://www.linkedin.com/in/mingruizhangee/"> <i className="fa fa-linkedin" aria-hidden="true"></i> </a></li>
                <li><a href="resources/pdf/Resume Mingrui Zhang.pdf"> <i className="fa fa-file-text" aria-hidden="true"></i> </a></li>
                <li><a href="mailto:mingrui.zhang@mail.mcgill.ca"> <i className="fa fa-envelope" aria-hidden="true"></i> </a></li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <Profile/>,
    document.getElementById("profile")
)