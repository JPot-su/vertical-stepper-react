import React, { useCallback } from 'react';
import { useRef } from "react";
import StepContent from './StepContent';
import StepLabel from './StepLabel';
import StepSpacer from './StepSpacer';
import { useScrollVisibility } from "../hooks/useScrollVIsibility";
import { useEffect } from "react";
import { useState } from "react";

export default function Step({
    step,
    _parentOptions
}) {
    const elRef = useRef();

    const isError = Boolean(step.error);

    const { successOnScrollEnable, isLastOne } = _parentOptions;
    const isScrolled = useScrollVisibility(elRef, successOnScrollEnable);

    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (isSuccess != Boolean(step.success)) {
            setIsSuccess(step.success);
        }
    }, [step.success])

    useEffect(() => {
        setIsSuccess(isScrolled);
    }, [isScrolled])

    useEffect(() => {
        if (isSuccess && typeof step.onSuccess === "function") {
            step.onSuccess();
        }
    }, [isSuccess])

    return (<>
        <div ref={elRef}>
            <StepLabel
                icon={isError ? step.errorIcon : isSuccess ? step.successIcon : step.icon}
                title={step.title}
            />
            <StepContent
                isError={isError}
                isSuccess={isSuccess}
            >
                {step.content}
            </StepContent>
            {
                isLastOne
                    ? null
                    : (
                        <StepSpacer
                            isError={isError}
                            isSuccess={isSuccess}
                        />
                    )
            }
        </div>
    </>)
}