import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

type Props = {};
const NewCourse = (props: Props) => {
    return (
    <>
        <br/><br/><br/><br/><br/>
        <Container sx={{paddingLeft: "inherit"}}>
            <Grid container sx={{placeItems: 'center'}}
                  spacing={1}
                  direction="column"
                  alignItems="center"
                  justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h3">
                        New Course
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </>
    );
};

export default NewCourse;