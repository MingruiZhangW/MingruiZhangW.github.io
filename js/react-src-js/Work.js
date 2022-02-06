export default function Work(props) {
    return (
        <div className={props.requiredWorkClassName} onAnimationEnd={props.workAnimationEnded}>
            <div className="work_sfl_container">
                <h1>
                    <a className="sfl_web_a" 
                       title="Savoir-faire Linux Website"
                       href="https://savoirfairelinux.com/en"
                       target="_blank" rel="noopener noreferrer">
                           Savoir-faire Linux
                    </a> (
                    <a className="jami_web_a"
                       title="Jami Website"
                       href="https://jami.net/"
                       target="_blank" rel="noopener noreferrer">
                           Jami
                    </a> Team), Montreal
                </h1>
                <h1 className="work_title">Software Developer</h1>
                <img className="jami_logo_svg" src="resources/img/jami_logo.svg" alt="Jami logo"></img>
                <div className="work_sfl_desp">
                    <p>
                        Savoir-faire Linux is specialized in open source software and digital electronics.
                        Jami, as one of its products, is a SIP-compatible distributed peer-to-peer softphone
                        and SIP-based instant messenger for multiple platforms. I worked as a software developer
                        to mainly assist the team in designing and developing Jami clients on multi-platform. I
                        also maintained and managed the CI/CD systems (Jenkins) for Jami clients. Managing
                        Jami dependencies to build natively on Windows was a part of my job as well.
                    </p>
                </div>
                <h3>
                    <a className="jami_gitlab_web_a"
                       title="Gitlab Repo"
                       href="https://git.jami.net/savoirfairelinux/jami-project/-/wikis/home"
                       target="_blank" rel="noopener noreferrer">
                           <i className="fa fa-gitlab" aria-hidden="true"></i>
                    </a>
                </h3>
            </div>
        </div>
    )
}