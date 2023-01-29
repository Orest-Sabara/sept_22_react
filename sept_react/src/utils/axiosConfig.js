import axios from 'axios';

import {baseURL} from '../api/endpoint'

export const axiosRequest = axios.create({baseURL})