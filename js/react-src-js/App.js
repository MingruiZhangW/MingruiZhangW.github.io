import Navbar from "./Navbar.js"
import Profile from "./Profile.js"
import Work from "./Work.js"

export default function App() {
    const navBarInitialStatusMap = {work : false, projects : false, profile : false,
                                    interests : false, contact : false}

    // profileClassName state for animation
    const [profileClassName, setProfileClassName] = React.useState("profile_container animate__animated \
                                                                    animate__bounceIn animate__delay-0.5s")
    // workClassName state for animation
    const [workClassName, setWorkClassName] = React.useState("work_info_container animate__animated \
                                                              animate__slideInUp animate__delay-0.5s")

    const [columnNavBarMenuDisplayed, setColumnNavBarMenuDisplayed] = React.useState(false)
    // screen width state detection
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)
    // currentNavBarItem tracker
    const [currentNavBarItem, setCurrentNavBarItem] = React.useState({...navBarInitialStatusMap, profile : true})

    // event listener for screen width change
    React.useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
            setColumnNavBarMenuDisplayed(false)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    const toggleColumnNavBarMenuDisplayed = () => {
        setColumnNavBarMenuDisplayed(!columnNavBarMenuDisplayed)
    }

    // handleProfileButtonClicked
    function showProfileWithAnimation() {
        // hide NavBarMenu if the profile nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed()
        }
        // set to current item
        setCurrentNavBarItem(() => {
            return {...navBarInitialStatusMap, profile : true}
        })
        // start animation
        const profileShowClassList = "profile_container animate__animated \
                                      animate__bounceIn animate__delay-0.5s"
        setProfileClassName(profileShowClassList)
    }

    function clearProfileAnimation() {
        // clean animation for the next turn
        const profileShowClassList = "profile_container"
        setProfileClassName(profileShowClassList)
    }

    // handleWorkButtonClicked
    function showWorkWithAnimation() {
        // hide NavBarMenu if the profile nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed()
        }
        // set to current item
        setCurrentNavBarItem(() => {
            return {...navBarInitialStatusMap, work : true}
        })
        // start animation
        const workShowClassList = "work_info_container animate__animated \
                                   animate__slideInUp animate__delay-0.5s"
        setWorkClassName(workShowClassList)
    }

    function clearWorkAnimation() {
        // clean animation for the next turn
        const workShowClassList = "work_info_container"
        setWorkClassName(workShowClassList)
    }

    return (
        <div className="app_container" style={{position : currentNavBarItem["profile"] != true ? 'static': 'fixed'}}>
            <div className="nav_container">
                <Navbar currentNavBarItem = {currentNavBarItem}
                        handleProfileButtonClicked={showProfileWithAnimation}
                        handleWorkButtonClicked={showWorkWithAnimation}
                        handleProjectsButtonClicked={showProfileWithAnimation}
                        handleInterestsButtonClicked={showProfileWithAnimation}
                        handleContactButtonClicked={showProfileWithAnimation}
                        requireColumnNavBarDisplayedToggle={toggleColumnNavBarMenuDisplayed}
                        isColumnNavBarDisplayed={columnNavBarMenuDisplayed}
                        windowWidth={screenWidth}/>
            </div>
            <div className="main_container">
                {currentNavBarItem["profile"] &&
                    <Profile requiredProfileClassName={profileClassName}
                             profileAnimationEnded={clearProfileAnimation}/>}
                {currentNavBarItem["work"] &&
                    <Work requiredWorkClassName={workClassName}
                          workAnimationEnded={clearWorkAnimation}/>}
            </div>
        </div>
    )
}