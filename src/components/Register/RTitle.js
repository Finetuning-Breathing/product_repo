import "../RTitle.css";

const RTitle = (props) => {
    return (
        <div className="regTitleDiv">
            <span className="regTitleSpan">{props.title}</span>
        </div>
    );
};

export default RTitle;
