import {Button, Card, Container, FormControl, FormLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import {useForm} from "react-hook-form";
import { postStudentData } from '../client/httpClient';

type Props = {
    name: string,
    email: string
};

const onSubmit = (e: any) => {
    alert(`Subbmited: ${e.name} ${e.email}`);
    postStudentData("students", {name: e.name, email: e.email});
}
const NewCourse = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    return (
        <>
            {/*<br/><br/><br/><br/><br/>*/}
            <Container sx={{paddingLeft: "inherit", paddingTop: "30px"}}>
                <Card>
                    <Grid container sx={{placeItems: 'center'}}
                          spacing={1}
                          direction="column"
                          alignItems="center"
                          justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant="h3">
                                New Student
                            </Typography>
                        </Grid>
                    </Grid>
                <form style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    width: "400px",
                    margin: "100px auto"
                }}
                    onSubmit={handleSubmit((data) => onSubmit(data))}>
               <FormControl>
                    <FormLabel>Name</FormLabel>
                   <TextField placeholder={"Enter Full Name"}
                              error={Boolean(errors.name)}
                              type="name"
                              helperText={Boolean(errors.name) ? <Typography>Name should be at least 5 and less than 50 chars</Typography> : null}
                              {...register("name", {minLength: 5, maxLength : 50, required: true})}/>
                   <FormLabel>Email</FormLabel>
                   <TextField placeholder={"Enter a valid email address"}
                              error={Boolean(errors.email)}
                              helperText={Boolean(errors.email) ? <Typography>Invalid Email</Typography> : null}
                              {...register("email", {
                                  validate: (val: any) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
                              })}/>
                    <Button type="submit">Submit</Button>
                </FormControl>
                </form>
                </Card>
            </Container>
        </>
    );};

export default NewCourse;