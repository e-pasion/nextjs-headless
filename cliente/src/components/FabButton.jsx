function FabButton() {
  return (
    <div className="fab-container">
        <div className="fab-hid shadow">
            <div className="fab-content">
                <span className="material-icons"><i className="fi-rs-check"></i></span>
            </div>
        </div>
        <div className="fab shadow">
            <div className="fab-content">
                <span className="material-icons"><i className="fi-rs-plus"></i></span>
            </div>
        </div>

        <div className="sub-button shadow">
            <a href="#">
                <span className="material-icons"><i className="fi-rs-wheelchair"></i></span>
            </a>
        </div>
        <div className="sub-button shadow bg-success">
            <a href="#">
                <span className="material-icons"><i className="fi-rs-comment"></i></span>
            </a>
        </div>
        <div className="sub-button shadow">
            <a href="#">
                <img src="imgs/theme/icons/icon-pse.svg" alt="PSE" />
            </a>
        </div>
    </div>
  )
}
export default FabButton