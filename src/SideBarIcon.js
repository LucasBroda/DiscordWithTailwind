const SideBarIcon = ({ icon, text="Test!!" }) => {
    return (
        <div className="sidebar-icon">
            {icon}
            <span className="sidebar-help">
                {text}
            </span>
        </div>
    );
}

export default SideBarIcon;