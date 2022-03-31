import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     "type": "service_account",
//     "project_id": "rumahakad-af900",
//     "private_key_id": "30ea57a5063da4540fe5a83987f5193a7dfe8cb5",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5g0n8yH/4FHXV\nMEHPm00PFPCgyzYa6xA2gaVeO7n0R05MrX9neYaIB3Gh/4Gv40NhUNDjOrQb4dd1\n1BRcQfJH5mjc4li3SS+vx1edF0W+2VHCmHau+eiwSVBBKx8z23VDlH9BF1MBK9NT\nhDAlKJ38+t5QPmjP8JvDZ6YpBf4m8oef6iCjtIKkO7d1AyYyQBog9hBf6kXTQ7A5\nKOm2/RvPiCkX6IKmUBqpiRGNGsmk/BYHKnxZ9iRshkm0DKgufEJwizf+zanNYKIl\n9f2jzP/fU7aca6nY7N38niRJJWKO8T0LY3s1uLIQAWJqm36OXPT7AJq+TL2o4N5S\nY+EGUsMZAgMBAAECggEADEC7TCyPhDqQulUiwaQ5q51307z8TLyaIGmBe0cBXhyw\nE6ExfSuCCt3H//nM7mm5r3WrqFh+ISnSZfRNKHdMGfriUfWKw8dcFJV7aFMrToLS\n00In86BqwasD95vyJoYQGZe3LHzOhREolvdwCSJExhrpQF5Q5KwZE6fWyhac3eRR\nqPDR7QkaHsTBOkK5R/iMaK7B7dD+T955qL5XTh6I31rsbt6I0YIAmxZW/jrcIE6T\nvCDRxjXT87VDyDko8qX1wnSh8MOxwpXY6JaVW92H7R5AP0OUz0LeUxGxLGHM+vdF\nK9HEuROf0tf7Z5ZvwZTjiGYmXlYm9+1HdktSFpEoEQKBgQD5/2zuQxabu86wBIFp\nJ68tP1SKTwKmDR1SGYVWOP9VRymg+Z+nzT88bG9jFRlkxjUzgnOmS0wPTHV7R/mH\naZRlURlMB3Czjf0X5PVkIUtLDBtZXNODBQWo3qQGCNCmMZNVhl8UqTM/j8S/lT5D\nw6MSOGWvKu8rJq0UT8uz9/6aUQKBgQC994Q4ZWudiUDBNVqMK/gCE8PzuWUsWnV/\nNSEfYrUGY7a7K1015KzxP0yVIUp+X1SVqsaWmNd6g2cSXH6T0Udw/PjZ4e5nRaTg\na0YjVX3w51jmXcnmW79PyyBrgAUrYvK/SniS00Ney0TZcjsT1OHnHp43X45+W+TM\nPuqgMhoiSQKBgEvv9WOuRzjI5HB8/d42KrTgzsowU8qioyxkCid1qsF5m0CFcqSi\n6Llu6qq7JvqAZnqd/okdyB3BiNIIu9gRDv1zk+6POAGieKWAa7Wdk2RZahlL5Aeh\nR+XSsxoOJWrGFk3dQhZhiuqcvhO/vqkQzQDk1qZNsVZ3Kg3Ia0TgaJrxAoGAHCp3\n0zjOZPQ1wq/bdg8K3Zv6oMdrRdE/vJWvDI1BE+py7Ht4fYYjUj21aCMgfW47B1nj\nye5tfH/BJ4rJRbdw5ULMztld1LgRwyiEpLaHTtGub7GWPu55hiYy711y5sTsAwrS\np8plIcf3tFnogn8841y5zrH/WaLcYKAvf4MONukCgYAzKeDO/aRZHHirsGhEJP9h\n6zrK0pVjTHSQHbkj4hby4kos9gx9ur4ABS4RTnApTmMA89BfWKZ6sinei9eWALl+\nEllj4dLS2xlu3Wh7CjhahO7GO6u0hLHwQ0J4k/abgnz9+ynQLApB4KXqLIaS5OU+\nnJkzbAW5DX0bcpIIzX/yUQ==\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-57qva@rumahakad-af900.iam.gserviceaccount.com",
//     "client_id": "102763704855792473833",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-57qva%40rumahakad-af900.iam.gserviceaccount.com"
// };
const firebaseConfig = {
    apiKey: "AIzaSyD6wZ5ImDeYTxReFNp_lW12NxmKIWcgMdk",
    authDomain: "rumahakad-af900.firebaseapp.com",
    projectId: "rumahakad-af900",
    storageBucket: "rumahakad-af900.appspot.com",
    messagingSenderId: "831264026485",
    appId: "1:831264026485:web:85afbc4c8dde7329b66d3c",
    measurementId: "G-PJLWWK65S7",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_email: "firebase-adminsdk-57qva@rumahakad-af900.iam.gserviceaccount.com",
    client_id: "102763704855792473833",
    type: "service_account",
    project_id: "rumahakad-af900",
    private_key_id: "30ea57a5063da4540fe5a83987f5193a7dfe8cb5",
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)