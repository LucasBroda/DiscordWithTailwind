import SideBarIcon from "./SideBarIcon"
import { GrAdd } from "react-icons/gr";
import { DiAptana } from "react-icons/di";
import { GoFileDirectory } from "react-icons/go";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
            <SideBarIcon icon={<GrAdd/>}></SideBarIcon>
            <SideBarIcon icon={<DiAptana/>}></SideBarIcon>
            <SideBarIcon icon={<GoFileDirectory/>}></SideBarIcon>
        </div>
    )
}

export default SideBar
