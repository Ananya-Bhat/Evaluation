import './mainBody.css'
import { useState } from 'react';
import Modal from '../modal/modal';

const MainBody = () => {

    const [category, setCategory] = useState('Social Media');
    const [toggle, setToggle] = useState(false);
    const [modal, setModal] = useState('');


    const Category = (e: any) => {
        setCategory(e.target.value);
    };

    const existingUser = JSON.parse(localStorage.getItem('users') || '');
    console.log("existinguser", existingUser);


    if (localStorage.getItem(existingUser) === null) {
        localStorage.setItem(existingUser, JSON.stringify([]));
    }

    const previousData = JSON.parse(
        localStorage.getItem(existingUser) || '[]'
    );

    console.log("prev", typeof existingUser);


    return (
        <div className='mainBody'>
            <div className="mainBodyContainer">
                <div className="mainBodyHeader">
                    <div className="headerTitle">Sites</div>

                    <div className="headerOptions">
                        <div className="headerSearch">
                            <input type="text" className="searchBar" placeholder="Search" />
                            <img src={require('../../assets/images/search.png')} alt="search" className="searchBarIcon" />
                        </div>
                        <div className="headerAddButton" >
                            <img src={require('../../assets/images/add_btn.png')} alt="add" onClick={() => {
                                setModal('Add Site');
                                setToggle(true);
                            }} />
                        </div>
                    </div>
                </div>

                <div className="mainBodyCount">
                    <div className="socialMedia">
                        Social Media
                    </div>

                    <div className="socialMediaCount">{existingUser.length - 1}</div>
                    <div className="socialMediaDropDown">
                        <img src={require('../../assets/images/Path Copy.png')} alt="path copy" />
                    </div>
                </div>

                <div className="mainBodyContainerBox">
                    <div className="mainBodyContents">
                        {JSON.stringify(existingUser) === '[]' ? (
                            <div className="mainBodyEmpty">
                                <div>Please Click on the “+” symbol to add sites</div>
                            </div>
                        ) : (
                            <div className="cardContainer">
                                {existingUser.map((element: any, index: number) => {
                                    return (
                                        <div key={index} className="cardContents" onClick={() => {
                                            setModal('Edit Site');
                                            setToggle(true);
                                        }}>
                                            <div className="cardUpper">
                                                <div>{element.url}</div>
                                                <div>{element.sitePassword}</div>
                                            </div>
                                        </div>
                                    );

                                })}
                            </div>
                        )}
                    </div>
                </div>
                {toggle ? (
                    <aside className="modal">
                        {/* <Modal props={modal} element={Index} /> */}
                        <Modal />
                        <div className="closeButton">
                            <button onClick={() => { setToggle(false); }} className="close">
                                <img src={require('../../assets/images/close_button.png')} alt="close" />
                            </button>
                        </div>
                    </aside>
                ) : (
                    ''
                )}
            </div>
        </div>

    )
}

export default MainBody