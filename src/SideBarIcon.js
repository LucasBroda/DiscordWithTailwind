const SideBarIcon = ({ icon, text="Test!!" }) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-help group-hover:scale-100">
                {text}
            </span>
        </div>
    );
}

export default SideBarIcon;