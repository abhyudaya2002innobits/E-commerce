import BounceLoader from "react-spinners/BounceLoader"

const Spinner=()=>{
    return (
        <>
        <div className="spinner-container">
            <BounceLoader className="spinner" color="#36d7b7" />
        </div>
        </>
    )
}
export default Spinner