import axios from 'axios';

let url = 'http://localhost:666/api/calls';
// eslint-disable-next-line
let urlq = `${url}/query`;

class MakeCalls {  
    //Create Posts
    static getAuth( host, user, pw ) {
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.post(url, {
                    host:host,
                    user:user,
                    pw:pw
                } );
                const data = res.data;
                // eslint-disable-next-line
                console.log(data);
                resolve(data.auth)
            } catch (err) {
                reject(err);
            }
        })
    }
    static sendQuery(query,auth) {
        console.log(query);
        console.log(auth);
        return new Promise(async (resolve,reject) =>{
            try{
                const res = await axios.post(urlq, {
                    host:query,
                    auth:auth
                } );
                const data = res.data;
                // eslint-disable-next-line
                console.log(data);
                resolve(data)
            } catch (err) {
                reject(err);
            }
        })

    }
}

export default MakeCalls;