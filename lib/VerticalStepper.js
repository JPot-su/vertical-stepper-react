import Step from './components/Step';
import { v4 as uuidv4 } from "uuid";


export default function VerticalStepper({
    successOnScrollEnable = true,
}) {

    return (<>
        <div>
            {
                Array.isArray(steps) && steps.map((step, index) => (
                    <Step
                        key={uuidv4()}
                        step={step}
                        _parentOptions={{
                            isLastOne: index === steps.length - 1,
                            successOnScrollEnable: Boolean(successOnScrollEnable)
                        }}

                    />)
                )
            }
        </div>
    </>
    );
}