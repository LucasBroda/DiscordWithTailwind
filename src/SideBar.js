import SideBarIcon from "./SideBarIcon"
import { GrAdd } from "react-icons/gr";
import { DiAptana } from "react-icons/di";
import { GoFileDirectory } from "react-icons/go";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
            <SideBarIcon icon={<GrAdd size="28"/>}></SideBarIcon>
            <SideBarIcon icon={<GoFileDirectory size="28"/>}></SideBarIcon>
            <SideBarIcon icon={<DiAptana size="28"/>}></SideBarIcon>
        </div>
    )
}

export default SideBar
