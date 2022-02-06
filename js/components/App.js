var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Navbar from "./Navbar.js";
import Profile from "./Profile.js";
import Work from "./Work.js";

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

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        columnNavBarMenuDisplayed = _React$useState6[0],
        setColumnNavBarMenuDisplayed = _React$useState6[1];
    // screen width state detection


    var _React$useState7 = React.useState(window.innerWidth),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        screenWidth = _React$useState8[0],
        setScreenWidth = _React$useState8[1];
    // currentNavBarItem tracker


    var _React$useState9 = React.useState(Object.assign({}, navBarInitialStatusMap, { profile: true })),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        currentNavBarItem = _React$useState10[0],
        setCurrentNavBarItem = _React$useState10[1];

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
        // hide NavBarMenu if the profile nav button is clicked
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
        // hide NavBarMenu if the profile nav button is clicked
        if (columnNavBarMenuDisplayed) {
            toggleColumnNavBarMenuDisplayed();
        }
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

    return React.createElement(
        "div",
        { className: "app_container", style: { position: currentNavBarItem["profile"] != true ? 'static' : 'fixed' } },
        React.createElement(
            "div",
            { className: "nav_container" },
            React.createElement(Navbar, { currentNavBarItem: currentNavBarItem,
                handleProfileButtonClicked: showProfileWithAnimation,
                handleWorkButtonClicked: showWorkWithAnimation,
                handleProjectsButtonClicked: showProfileWithAnimation,
                handleInterestsButtonClicked: showProfileWithAnimation,
                handleContactButtonClicked: showProfileWithAnimation,
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
                workAnimationEnded: clearWorkAnimation })
        )
    );
}