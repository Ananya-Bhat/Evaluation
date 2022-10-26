import './modal.css'

const Modal = () => {

    const previousData: any = JSON.parse(localStorage.getItem("users") || '[]');

    console.log('previous', previousData);

    const submitHandler = (e: any) => {
        e.preventDefault();

        const siteData = {
            // siteName: e.target.siteName.value,
            url: e.target.url.value,
            sector: e.target.sector.value,
            userName: e.target.userName.value,
            sitePassword: e.target.sitePassword.value,
            notes: e.target.notes.value,
            icon: '',
        };

        console.log("siteData", siteData);
        if (
            // siteData.siteName !== '' &&
            siteData.url !== '' &&
            siteData.userName !== '' &&
            siteData.sitePassword !== '' &&
            siteData.sector !== ''
        ) {
            previousData.push(siteData);
            // console.log('P', previousData);
            localStorage.setItem("users", JSON.stringify(previousData));
            window.location.reload();
        } else {
            alert('Please enter all the required fields');
        }
    };


    return (
        <div className="modalBody">
            {/* <div className="modalMobileTopbar"></div> */}
            <div className="overlay"></div>
            <div className="modal-content">
                <div className="modalTitle">Add Site</div>
                <form onSubmit={submitHandler}>
                    <div className="modalBodyForm">
                        <div className="modalInput occupy">
                            <div>URL</div>
                            <input type="text" name="url" className="modalInputBar" />
                        </div>
                        <div className="modalInput">
                            <div>Site Name</div>
                            <input type="text" name="siteName" className="modalInputBar" />
                        </div>
                        <div className="modalInput">
                            <div>Sector/Folder</div>
                            <select name="sector" className="modalInputBar">
                                {' '}
                                <option value="Social Media">Social Media</option>
                                <option value="Finance">Finance</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>
                        <div className="modalInput">
                            <div>User Name</div>
                            <input type="text" name="userName" className="modalInputBar" />
                        </div>
                        <div className="modalInput">
                            <div>Site Password</div>
                            <div className="paswordEyeContainer">
                                <input type="text" name="sitePassword" className="modalInputBar" />
                                <img src={require('../../assets/images/eye_on.png')} alt="eye" className='passwordEye' />
                            </div>
                        </div>
                        <div className="modalInput occupy">
                            <div>Notes</div>
                            <textarea className="modalInputBar" name="notes" />
                        </div>

                    </div>
                    <div className="modalButtons">
                        <button className="modalButton modalResetButton">Reset</button>
                        <button className="modalButton modalSaveButton" type="submit">Save </button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default Modal