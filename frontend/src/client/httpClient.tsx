import axios from 'axios';
import { cloneDeep } from 'lodash';

const BASE_URL = "http://localhost:3000/"

export let isError:boolean = false;

let errorMessage: string = "";

let errorMessageList: string[] = [];

export function getErrorMessageList() {
    let eml = cloneDeep(errorMessageList);
    //errorMessageList = [];
    return eml;
}

export function removeErrorMessage(e:string) {
    const index = errorMessageList.indexOf(e, 0);
    if (index > -1) {
        console.log(errorMessageList.splice(index, 1));
    }
}

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
            isError = false;
            return response.data
        }
    ).catch((reason) => {
        isError = true;
        console.log(reason);
        return []
    })
}

export function getStudentData(uri: string) {
    return axios.get<GetStudentsResponse>(BASE_URL + uri).then((response) =>
        {
            isError = false;
            return response.data
        }
    ).catch((reason) => {
        isError = true;
        console.log(reason);
        return []
    })
}

export function postStudentData(uri:string, data:Student) {
    axios.interceptors.request.use(request => {
        console.log('Starting Request', JSON.stringify(request, null, 2))
        return request
    })
    axios.post<GetStudentsResponse>(BASE_URL + uri, data).then((response) => {
        isError = false;
        console.log(response);
        return response.data
    }).catch((reason) => {
        isError = true;
        console.log("Error!");
        console.log(reason.code);
        console.log(reason.message);
        if(reason.response) {
            console.log(reason.response);
            errorMessage = reason.response.request.responseText;
            errorMessageList.push(`${errorMessage}`);
        }
        console.log(reason.response?.data);
        console.log(reason.response?.data.email[0]);
        return []
    })

}