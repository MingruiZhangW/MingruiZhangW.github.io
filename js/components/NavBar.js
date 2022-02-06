export default function Navbar(props) {
  // Hook that alerts clicks outside of the passed ref and menuButtonRef
  function outsideNavAlerter(ref, menuButtonRef, props) {
    React.useEffect(function () {
      // Alert if clicked on outside of ul list and menu button
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && menuButtonRef.current && !menuButtonRef.current.contains(event.target) && props.isColumnNavBarDisplayed) {
          // If outside, then close the ul list
          props.requireColumnNavBarDisplayedToggle();
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, props]);
  }

  var ulRef = React.useRef(null);
  var menuButtonRef = React.useRef(null);
  outsideNavAlerter(ulRef, menuButtonRef, props);

  return React.createElement(
    "nav",
    null,
    (props.isColumnNavBarDisplayed || props.windowWidth > 600) && React.createElement(
      "ul",
      { ref: ulRef, className: "list" },
      React.createElement(
        "li",
        { className: props.currentNavBarItem["work"] ? "current_nav_item" : "items",
          onClick: props.handleWorkButtonClicked },
        React.createElement(
          "a",
          null,
          "work"
        )
      ),
      React.createElement(
        "li",
        { className: props.currentNavBarItem["projects"] ? "current_nav_item" : "items",
          onClick: props.handleProjectsButtonClicked },
        React.createElement(
          "a",
          null,
          "projects"
        )
      ),
      React.createElement(
        "li",
        { className: props.currentNavBarItem["profile"] ? "current_nav_item" : "items",
          onClick: props.handleProfileButtonClicked },
        React.createElement(
          "a",
          null,
          "profile"
        )
      ),
      React.createElement(
        "li",
        { className: props.currentNavBarItem["interests"] ? "current_nav_item" : "items",
          onClick: props.handleInterestsButtonClicked },
        React.createElement(
          "a",
          null,
          "interests"
        )
      ),
      React.createElement(
        "li",
        { className: props.currentNavBarItem["contact"] ? "current_nav_item" : "items",
          onClick: props.handleContactButtonClicked },
        React.createElement(
          "a",
          null,
          "contact"
        )
      )
    ),
    React.createElement(
      "button",
      { ref: menuButtonRef, onClick: props.requireColumnNavBarDisplayedToggle, className: "menu_button" },
      "menu ",
      React.createElement("i", { className: "fa fa-bars" })
    )
  );
}