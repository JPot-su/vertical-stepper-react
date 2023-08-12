import style from "../styles/style.module.css";


export default function StepSpacer({ isError, isSuccess }) {
    return (<>
        <div
            className={`${isError ? style.left_side_line_error : isSuccess ? style.left_side_line_success : style.left_side_line} ${style.spacer}`}
        />
    </>)
}