import axios from 'axios';
/*  FETCH:
    built in function, don't have to install any additional library to use it.
    Strange in handling error and requires a big amount of additional code.

    AXIOS:
    separate library for making requests. Easy to use and have nice features

 */
export default axios.create({
    //route url I want to make the request to
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer P3oGCiDG4u4Z_V8K1mbtYZfl0WmdrfyHpUf1-QAORpZNkgc_cXIqt5ibVV0gv76NF1plAsXJZzOec96Ly-zf5oQjp9TI96IBptAy0IqzcYEZeK8UJug3Ey1Wkj-jXXYx'
    }
});
