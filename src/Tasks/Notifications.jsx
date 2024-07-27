const Notifications=()=>{
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center mt-40 flex justify-center items-center mb-2">Notifications</h1>
                <div className="rounded bg-[#0b69ff] text-center mt-3 flex justify-center items-center h-12">
                <img className="h-6 w-6  ml-4" src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" alt="" />
                <p className=" text-white text-left w-60 p-2 text-sm ml-2">Information Message</p>
                </div>
                <div className="rounded bg-[#2dca73] text-center mt-3 flex justify-center items-center h-12">
                <img className="h-6 w-6 ml-4" src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="" />
                <p className=" text-white text-left w-60 p-2 text-sm ml-2">Success Message</p>
                </div>
                <div className="rounded bg-[#ffb800] flex justify-center items-center text-center mt-3 h-12">
                <img className="h-6 w-6 ml-4 " src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" alt="" />
                <p className=" text-white text-left w-60 p-2 text-sm ml-2">Warning Message</p>
                </div>
                <div className="rounded bg-[#ff0b37] text-center mt-3 flex justify-center items-center h-12">
                <img className="h-6 w-6 ml-4" src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" alt="" />
                <p className="text-white text-left text-sm w-60 p-2 ml-2">Error Message</p>
                </div>
        </div>
    )
}
export default Notifications