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

    console.log(step.scrolled, "scrolled")

    useEffect(() => {
        (async () => {
            if (!step.scrolled) {
                if (successOnScrollEnable) {
                    if (isScrolled) {
                        try {
                            if (typeof step.setError === "function") {
                                step.setError(false);
                            }
                            await step.onScrolled();
                        } catch {
                            console.error("Cannot set 'success' status on scroll.")
                            if (typeof step.setError === "function") {
                                step.setError(true);
                            }
                        }
                    }
                }
            }
        })()
    }, [isScrolled, successOnScrollEnable, step])

    useEffect(() => {
        if (step.success && typeof step.onSuccess === "function") {
            step.onSuccess();
        }
    }, [step.success]);


    return (<>
        <div ref={elRef}>
            <StepLabel
                icon={isError ? step.errorIcon : step.success ? step.successIcon : step.icon}
                title={step.title + String(step.scrolled ? "yes" : "no")}
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