import React from "react";
import s from './Validators.module.css';

// const renderField = ({
//                          input,
//                          label,
//                          type,
//                          meta: {touched, error, warning}
//                      }) => (
//     <div>
//         <label>{label}</label>
//         <div>
//             <input {...input} placeholder={label} type={type}/>
//             {touched &&
//             ((error && <span>{error}</span>) ||
//                 (warning && <span>{warning}</span>))}
//         </div>
//     </div>
// )

export const renderInput = (fieldData) => {
    // console.log(fieldData);
    // {input, label, type, meta: {touched, error, warning}}
    const {input, meta, ...restProps} = fieldData;
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <input {...input}{...restProps}/>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>
    );
}

export const renderTextarea = (fieldData) => {
    const {input, meta, ...restProps} = fieldData;
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <textarea {...input}{...restProps}/>
            <div>
                {hasError && <span>{meta.error}</span> }
            </div>
        </div>
    );
}