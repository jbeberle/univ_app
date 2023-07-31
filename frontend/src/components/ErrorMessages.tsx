import {cloneDeep} from 'lodash';
import React, {useEffect, useState} from 'react';
import {getErrorMessageList, removeErrorMessage} from '../client/httpClient';
import {Alert, Stack} from "@mui/material";


type Props = {};


export function delay(ms: number): Promise<typeof setTimeout> {
    console.log('setting delay')
    return new Promise(resolve => setTimeout(resolve, ms));
}


let done = false;


const ErrorMessages = (props: Props) => {
    const [errors, setErrors] = useState<string[]>([]);
    done = false;

    async function checkErrorsThread() {
        for (let i = 0; i < 30 && !done; i++) {
            await delay(5000);
            console.log("In loop");
            let newErrors3: Array<string> = cloneDeep(getErrorMessageList());
            setErrors(newErrors3);
        }
    };

    let newErrors = cloneDeep(errors);
    let itemDeleted: boolean = false;

    useEffect(() => {
        // load data
        console.log("Loading events...");
        done = false;
        let thread = checkErrorsThread();

        // Cleanup Actions
        return () => {
            console.log("Cleaning up");
            done = true;
        }
    }, []);


    return (
        <>
            <br/><br/><br/>
            {errors && errors.map((e) =>
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert id={e} onClose={(e2: React.SyntheticEvent) => {
                        console.log("I got called!")
                        console.log(e);
                        removeErrorMessage(e);
                    }} variant="filled" severity="error">
                        {e}
                    </Alert>
                </Stack>
            )}
        </>
    );
};

export default ErrorMessages;
