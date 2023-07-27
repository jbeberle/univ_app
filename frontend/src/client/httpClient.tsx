import axios from 'axios';

const BASE_URL = "http://localhost:3000/"

export interface Course {
    short_name: string,
    name: string,
    description: string
}

type GetCoursesResponse = {
    data: Course[];
}

export interface Student {
    name: string,
    email: string
}

type GetStudentsResponse = {
    data: Student[];
}

export function getCourseData(uri: string) {
    return axios.get<GetCoursesResponse>(BASE_URL + uri).then((response) =>
        {
            return response.data
        }
    ).catch((reason) => {
        console.log(reason);
        return []
    })
}

export function getStudentData(uri: string) {
    return axios.get<GetStudentsResponse>(BASE_URL + uri).then((response) =>
        {
            return response.data
        }
    ).catch((reason) => {
        console.log(reason);
        return []
    })
}
