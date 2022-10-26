import MainBody from "../../components/mainBody/mainBody"
import SideBar from "../../components/sideBar/sideBar"
import TopBar from "../../components/topBar/topBar"

const DashBoard = () => {
    return (
        <div className="dashBoard">
            <div className="dashBoardContainer">
                <div className="sideBar">
                    <SideBar />
                </div>
                <div className="topBar">
                    <TopBar />
                </div>

                {/* <div className="mobileTopBar">
                    <div className="mobileTopBarFirst">
                        <img
                            src={require('../../assets/icons/burger_menu (2).png')}
                            alt="burger"
                        />
                        <img
                            src={require('../../assets/icons/PASS MANAGER.png')}
                            alt="pass manager"
                        />
                    </div>
                    <div className="mobileTopBarLast">
                        <img
                            src={require('../../assets/icons/search (2).png')}
                            alt="search"
                            id="searchIcon"
                            onClick={() => {
                                document.getElementById('searchIcon')?.classList.add('flex');
                            }}
                        />
                        <img src={require('../../assets/icons/sync_icn.png')} alt="sync" />
                        <img
                            src={require('../../assets/icons/profile (2).png')}
                            alt="profile"
                        />

                    </div>
                </div> */}
                <div className="mainBody">
                    <MainBody />
                </div>
            </div>
        </div>
    )
}

export default DashBoard