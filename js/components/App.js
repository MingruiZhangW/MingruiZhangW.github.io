var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Navbar from "./Navbar.js";
import Profile from "./Profile.js";
import Work from "./Work.js";
import Projects from "./Projects.js";
import Interests from "./Interests.js";
import Contact from "./Contact.js";

export default function App() {
    var navBarInitialStatusMap = { work: false, projects: false, profile: false,
        interests: false, contact: false

        // profileClassName state for animation
    };
    var _React$useState = React.useState("profile_container animate__animated \
                                                                    animate__bounceIn animate__delay-0.5s"),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        profileClassName = _React$useState2[0],
        setProfileClassName = _React$useState2[1];
    // workClassName state for animation


    var _React$useState3 = React.useState("work_info_container animate__animated \
                                                              animate__slideInUp animate__delay-0.5s"),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        workClassName = _React$useState4[0],
        setWorkClassName = _React$useState4[1];
    // projectsClassName state for animation


    var _React$useState5 = React.useState("projects_info_container \
                                                                      animate__animated \
                                                                      animate__slideInUp\
                                                                      animate__delay-0.5s"),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        projectsClassName = _React$useState6[0],
        setProjectsClassName = _React$useState6[1];
    // interestsClassName state for animation


    var _React$useState7 = React.useState("interests_info_container \
                                                                        animate__animated \
                                                                        animate__slideInUp\
                                                                        animate__delay-0.5s"),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        interestsClassName = _React$useState8[0],
        setInterestsClassName = _React$useState8[1];
    // contactClassName state for animation


    var _React$useState9 = React.useState("contact_info_container \
                                                                    animate__animated \
                                                                    animate__pulse\
                                                                    animate__delay-0.5s"),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        contactClassName = _React$useState10[0],
        setContactClassName = _React$useState10[1];

    var _React$useState11 = React.useState(false),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        columnNavBarMenuDisplayed = _React$useState12[0],
        setColumnNavBarMenuDisplayed = _React$useState12[1];
    // screen width state detection


    var _React$useState13 = React.useState(window.innerWidth),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        screenWidth = _React$useState14[0],
        setScreenWidth = _React$useState14[1];
    // currentNavBarItem tracker


    var _React$useState15 = React.useState(Object.assign({}, navBarInitialStatusMap, { profile: true })),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        currentNavBarItem = _React$useState16[0],
        setCurrentNavBarItem = _React$useState16[1];

    // event listener for screen width change


    React.useEffect(function () {
        var changeWidth = function changeWidth() {
            setScreenWidth(window.innerWidth);
            setColumnNavBarMenuDisplayed(false);
        };

        window.addEventListener('resize', changeWidth);

        return function () {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);

    var toggleColumnNavBarMenuDisplayed = function toggleColumnNavBarMenuDisplayed() {
        setColumnNavBarMenuDisplayed(!columnNavBarMenuDisplayed);
    };

    // handleProfileButtonClicked
    function showProfileWithAnimation() {
        // hide NavBarMenu if the nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed();
        }

        // set to current item
        setCurrentNavBarItem(function () {
            return Object.assign({}, navBarInitialStatusMap, { profile: true });
        });
        // start animation
        var profileShowClassList = "profile_container animate__animated \
                                      animate__bounceIn animate__delay-0.5s";
        setProfileClassName(profileShowClassList);
    }

    function clearProfileAnimation() {
        // clean animation for the next turn
        var profileShowClassList = "profile_container";
        setProfileClassName(profileShowClassList);
    }

    // handleWorkButtonClicked
    function showWorkWithAnimation() {
        // hide NavBarMenu if the nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed();
        }

        // scroll to the top
        window.scrollTo(0, 0);

        // set to current item
        setCurrentNavBarItem(function () {
            return Object.assign({}, navBarInitialStatusMap, { work: true });
        });
        // start animation
        var workShowClassList = "work_info_container animate__animated \
                                   animate__slideInUp animate__delay-0.5s";
        setWorkClassName(workShowClassList);
    }

    function clearWorkAnimation() {
        // clean animation for the next turn
        var workShowClassList = "work_info_container";
        setWorkClassName(workShowClassList);
    }

    // handleProjectsButtonClicked
    function showProjectsWithAnimation() {
        // hide NavBarMenu if the nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed();
        }

        // scroll to the top
        window.scrollTo(0, 0);

        // set to current item
        setCurrentNavBarItem(function () {
            return Object.assign({}, navBarInitialStatusMap, { projects: true });
        });
        // start animation
        var projectsShowClassList = "projects_info_container animate__animated \
                                       animate__slideInUp animate__delay-0.5s";
        setProjectsClassName(projectsShowClassList);
    }

    function clearProjectsAnimation() {
        // clean animation for the next turn
        var projectsShowClassList = "projects_info_container";
        setProjectsClassName(projectsShowClassList);
    }

    // handleInterestsButtonClicked
    function showInterestsWithAnimation() {
        // hide NavBarMenu if the nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed();
        }

        // scroll to the top
        window.scrollTo(0, 0);

        // set to current item
        setCurrentNavBarItem(function () {
            return Object.assign({}, navBarInitialStatusMap, { interests: true });
        });
        // start animation
        var interestsShowClassList = "interests_info_container animate__animated \
                                        animate__slideInUp animate__delay-0.5s";
        setInterestsClassName(interestsShowClassList);
    }

    function clearInterestsAnimation() {
        // clean animation for the next turn
        var interestsShowClassList = "interests_info_container";
        setInterestsClassName(interestsShowClassList);
    }

    // handleContactButtonClicked
    function showContactWithAnimation() {
        // hide NavBarMenu if the nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed();
        }

        // set to current item
        setCurrentNavBarItem(function () {
            return Object.assign({}, navBarInitialStatusMap, { contact: true });
        });
        // start animation
        var contactShowClassList = "contact_info_container animate__animated \
                                        animate__pulse animate__delay-0.5s";
        setContactClassName(contactShowClassList);
    }

    function clearContactAnimation() {
        // clean animation for the next turn
        var contactShowClassList = "contact_info_container";
        setContactClassName(contactShowClassList);
    }

    return React.createElement(
        "div",
        { className: "app_container", style: { position: currentNavBarItem["profile"] != true && currentNavBarItem["contact"] != true ? 'static' : 'fixed' } },
        React.createElement(
            "div",
            { className: "nav_container" },
            React.createElement(Navbar, { currentNavBarItem: currentNavBarItem,
                handleProfileButtonClicked: showProfileWithAnimation,
                handleWorkButtonClicked: showWorkWithAnimation,
                handleProjectsButtonClicked: showProjectsWithAnimation,
                handleInterestsButtonClicked: showInterestsWithAnimation,
                handleContactButtonClicked: showContactWithAnimation,
                requireColumnNavBarDisplayedToggle: toggleColumnNavBarMenuDisplayed,
                isColumnNavBarDisplayed: columnNavBarMenuDisplayed,
                windowWidth: screenWidth })
        ),
        React.createElement(
            "div",
            { className: "main_container" },
            currentNavBarItem["profile"] && React.createElement(Profile, { requiredProfileClassName: profileClassName,
                profileAnimationEnded: clearProfileAnimation }),
            currentNavBarItem["work"] && React.createElement(Work, { requiredWorkClassName: workClassName,
                workAnimationEnded: clearWorkAnimation }),
            currentNavBarItem["projects"] && React.createElement(Projects, { requiredProjectsClassName: projectsClassName,
                projectsAnimationEnded: clearProjectsAnimation }),
            currentNavBarItem["interests"] && React.createElement(Interests, { requiredInterestsClassName: interestsClassName,
                interestsAnimationEnded: clearInterestsAnimation }),
            currentNavBarItem["contact"] && React.createElement(Contact, { requiredContactClassName: contactClassName,
                contactAnimationEnded: clearContactAnimation })
        )
    );
}