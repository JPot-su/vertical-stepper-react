import style from "../styles/style.module.css";


export default function StepContent({ isError, isSuccess, children }) {
    return (<>
        <div
            className={isError ? style.left_side_line_error : isSuccess ? style.left_side_line_success : style.left_side_line}
        >
            {children}
        </div>
    </>)
}