import {Button, Card, CardActions, CardContent, Container, Grid, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Course, getCourseData, getStudentData, Student} from '../client/httpClient';


type Props = {};
const Students = (props: Props) => {
    const [students, setStudents]: any[] = useState([]);
    useEffect(() => {
        let mounted = true;
        getStudentData("students").then((items) => {
            if (mounted) {
                setStudents(items);
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
                            Students
                        </Typography>
                    </Grid>
                    <Grid container sx={{placeItems: 'center'}}
                          spacing={1}
                          alignItems="center"
                    >
                        {students.map((student: Student, index: number) =>
                            <Grid item xs={6}>
                                <Card sx={{minWidth: 275, background: 'gray', color: 'white'}}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Name: {student.name}
                                        </Typography>
                                        <Typography variant="body2" component="div">
                                            Email:  {student.email}
                                        </Typography>
                                        <Typography variant="body2">
                                            Course Enrollments
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="inherit">View Profile</Button>
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

export default Students;