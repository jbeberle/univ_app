import {Button, Card, CardActions, CardContent, Container, Grid, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Course, getCourseData} from '../client/httpClient';


type Props = {};
const Courses = (props: Props) => {
    const [courses, setCourses]: any[] = useState([]);
    useEffect(() => {
        let mounted = true;
        getCourseData("courses").then((items) => {
            if (mounted) {
                setCourses(items);
            }
        });

        return () => {
            (mounted = false)
        }

    }, []);

    return (
        <>
            {/*<br/><br/><br/><br/><br/>*/}
            <Container sx={{paddingLeft: "inherit"}}>
                <Grid container sx={{placeItems: 'center'}}
                      spacing={1}
                      direction="column"
                      alignItems="center"
                      justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            Course Listings
                        </Typography>
                    </Grid>
                    <Grid container sx={{placeItems: 'center'}}
                          spacing={1}
                          alignItems="center"
                    >
                        {courses.map((course: Course, index: number) =>
                            <Grid item xs={6}>
                                <Card sx={{minWidth: 275, background: 'gray', color: 'white'}}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {course.short_name}: {course.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {course.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="inherit">Enroll</Button>
                                        <Button size="small" color={"inherit"}>Info</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Courses;