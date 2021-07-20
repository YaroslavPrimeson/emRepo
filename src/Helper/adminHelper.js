import {fire} from '../Firebase/Firebase.js';
import firebase from "firebase/app";
import "firebase/storage";

/*** ================================================================================
 *          JSON's
 * ================================================================================*/
export const serviceTariffsID = 'QqabZKKQPqt9jBqpwzXw';

/*** ================================================================================
 *          Parse Dates
 * ================================================================================*/
export function getDateFromMilliseconds(num) {
    const date = new Date(num);
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getUTCDate() + ' ' + date.getHours() + ':' + date.getMinutes();
}

export function getDate() {
    const date = new Date();
    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getUTCDate() + ' ' + date.getHours() + ':' + date.getMinutes();
}

export function getDateInput(input) {
    if (input === undefined) {
        return "-"
    }
    try {
        const date = new Date(input);
        return date.getUTCDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    } catch (e) {
        return "0"
    }

}

/*** ================================================================================
 *          Server
 * ================================================================================*/
// export function parseChannelsToLinks() {
//     const requestOptions = {
//         "mode": "no-cors",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//             "Access-Control-Allow-Headers": "*",
//         },
//         "body": {"url": 'https://rt.pornhub.com/channels/pinup-files'}
//     };
//
//     axios.post('https://36z0.l.time4vps.cloud/api/channel-parser/', requestOptions)
//         .then(response =>
//             console.log(response)
//         ).catch(error =>
//         console.log(error)
//     )
// }

/*** ================================================================================
 *          Firebase
 * ================================================================================*/
export function getCollection(collection) {
    return new Promise(function (resolve, reject) {
        fire.firestore().collection(collection).get().then(res => {
            const data = [];
            res.forEach(doc => {
                data.push({
                    idPost: doc.id,
                    ...doc.data()
                })
            });
            resolve(data)
        }).catch(err => {
            reject(err);
        });
    });
}

export function getDocInCollection(collection, id) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(id)
                .get()
                .then(querySnapshot => {
                    resolve(querySnapshot.data());
                });
        } catch (e) {
            reject(e);
        }
    })
}

export function getCollectionWhereKeyValue(collection, key, value) {
    return new Promise(function (resolve, reject) {
        fire.firestore().collection(collection).where(key, "==", value).get().then(res => {
            const data = [];
            res.forEach(doc => {
                data.push({
                    idPost: doc.id,
                    ...doc.data()
                })
            });
            resolve(data)
        }).catch(err => {
            reject(err);
        });
    });
}

export function setDocumentToCollection(collection, document) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).add(document)
                .then(r => {
                    // console.log('success',r)
                    resolve({result: r});
                }).catch(e => {
                reject(e);
            })
        } catch (e) {
            reject(e);
        }
    })
}

export function updateDocumentInCollection(collection, document, idDocumnent) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(idDocumnent).update(document).then(r => {
                resolve({result: r})
            }).catch(e => {
                reject(e);
            })
        } catch (e) {
            reject(e);
        }
    })
}

export function deleteDocumentFromCollectionWithID(collection, idPost) {
    return new Promise(function (resolve, reject) {
        try {
            fire.firestore().collection(collection).doc(idPost).delete()
                .then(() => {
                    resolve("Deleted")
                }).catch(function (error) {
                reject(error)
            });
        } catch (e) {
            reject(e)
        }
    })
}

export async function uploadFile(event) {
    const storageRef = firebase.storage().ref();
    const file = event.target.files[0]
    const fileName = (+new Date()) + '-' + file.name;
    const metadata = {contentType: file.type};
    const task = storageRef.child(fileName).put(file, metadata);
    try {
        const response= await task
        return response.ref.getDownloadURL()

    } catch (err) {
        return err
    }

}