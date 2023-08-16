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
    const [isScrolledOnce, setIsScrolledOnce] = useState(false);

    useEffect(() => {
        (async () => {
            if (!isScrolledOnce) {
                if (isScrolled) {
                    try {
                        if (typeof step.setError === "function") {
                            step.setError(false);
                        }
                        await step.setSuccess();
                    } catch {
                        console.error("Cannot set 'success' status on scroll.")
                        if (typeof step.setError === "function") {
                            step.setError(true);
                        }
                    }
                    setIsScrolledOnce(true);
                }
            }
        })()
    }, [isScrolled, isScrolledOnce, step])

    useEffect(() => {
        if (step.success && typeof step.onSuccess === "function") {
            step.onSuccess();
        }
    }, [step.success]);

    console.log("success", step.success)

    return (<>
        <div ref={elRef}>
            <StepLabel
                icon={isError ? step.errorIcon : step.success ? step.successIcon : step.icon}
                title={step.title}
            />
            <StepContent
                isError={isError}
                isSuccess={step.success}
            >
                {step.content}
            </StepContent>
            {
                isLastOne
                    ? null
                    : (
                        <StepSpacer
                            isError={isError}
                            isSuccess={step.success}
                        />
                    )
            }
        </div>
    </>)
}