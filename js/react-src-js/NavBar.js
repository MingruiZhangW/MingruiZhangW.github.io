export default function Navbar(props) {
  // Hook that alerts clicks outside of the passed ref and menuButtonRef
  function outsideNavAlerter(ref, menuButtonRef, props) {
    React.useEffect(() => {
      // Alert if clicked on outside of ul list and menu button
      function handleClickOutside(event) {
        if (((ref.current && !ref.current.contains(event.target)) &&
          menuButtonRef.current && !menuButtonRef.current.contains(event.target)) &&
          props.isColumnNavBarDisplayed) {
          // If outside, then close the ul list
          props.requireColumnNavBarDisplayedToggle()
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, props]);
  }

  const ulRef = React.useRef(null);
  const menuButtonRef = React.useRef(null);
  outsideNavAlerter(ulRef, menuButtonRef, props);

  return (
    <nav>
      {(props.isColumnNavBarDisplayed || props.windowWidth > 600) && (
        <ul ref={ulRef} className="list">
          <li className={props.currentNavBarItem["work"] ? "current_nav_item" : "items"}
              onClick={props.handleWorkButtonClicked}>
            <a>work</a>
          </li>
          <li className={props.currentNavBarItem["projects"] ? "current_nav_item" : "items"}
              onClick={props.handleProjectsButtonClicked}>
            <a>projects</a>
          </li>
          <li className={props.currentNavBarItem["profile"] ? "current_nav_item" : "items"}
              onClick={props.handleProfileButtonClicked}>
            <a>profile</a>
          </li>
          <li className={props.currentNavBarItem["interests"] ? "current_nav_item" : "items"}
              onClick={props.handleInterestsButtonClicked}>
            <a>interests</a>
          </li>
          <li className={props.currentNavBarItem["contact"] ? "current_nav_item" : "items"}
              onClick={props.handleContactButtonClicked}>
            <a>contact</a>
          </li>
        </ul>
      )}
      <button ref={menuButtonRef} onClick={props.requireColumnNavBarDisplayedToggle} className="menu_button">
        menu <i className="fa fa-bars"></i>
      </button>
    </nav>
  )
}
