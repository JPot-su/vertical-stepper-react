import React from 'react';
import Step from './components/Step';


export default function VerticalStepper({
    steps,
    successOnScrollEnable = true,
}) {
    return (<>
        <div>
            {
                Array.isArray(steps) && steps.map((step, index) => (
                    <Step
                        key={`${step.title}_${index}`}
                        step={step}
                        _parentOptions={{
                            isLastOne: index === steps.length - 1,
                            successOnScrollEnable: Boolean(successOnScrollEnable),
                        }}

                    />)
                )
            }
        </div>
    </>
    );
}