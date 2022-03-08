export const addImageList = (items) => {
    let image

    if(localStorage.getItem('image?=7RGrpUFkg==N9GrymAoOaRXPclYJSRor9G8/') === null){
        image = []
    }else {
        image = JSON.parse(localStorage.getItem('image?=7RGrpUFkg==N9GrymAoOaRXPclYJSRor9G8/'))
    }

    image.push({
        id: Math.floor(Math.random() * 99999) / 212,
        image : items
    })
    localStorage.setItem('image?=7RGrpUFkg==N9GrymAoOaRXPclYJSRor9G8/',JSON.stringify(image))

} 

export function getBase64Image(imgUrl, callback) {

    var img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function(){

      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png")
        //   dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

      callback(dataURL); // the base64 string

    };

    // set attributes and src 
    img.setAttribute('crossOrigin', 'anonymous'); //
    img.src = imgUrl;

}

if(window.location.pathname === '/configuration'){
    if (!window.indexedDB) {
        console.log(`Your browser doesn't support IndexedDB`);
    }else { 
        const request = indexedDB.open('rumah_akad', 1);
    
        request.onerror = (event) => {
            console.error(`Database error: ${event.target.errorCode}`);
        };
        
        request.onupgradeneeded = (event) => {
            let db = event.target.result;
    
            db.createObjectStore('image', {
                autoIncrement: false
            });
        };
    }
}

export const createTable = (table) => {
    const request = indexedDB.open('rumah_akad', 1);
    
        request.onerror = (event) => {
            console.error(`Database error: ${event.target.errorCode}`);
        };
        
        request.onupgradeneeded = (event) => {
            let db = event.target.result;
    
            db.createObjectStore(table, {
                autoIncrement: false
            });
        };
}

export const addDatabase = (db,table,data,dataKey = null) => {
    const trs = db.transaction([`${table}`],'readwrite'),
          store = trs.objectStore(`${table}`)
          var generateKey = ''
    
            if(dataKey === null){
                generateKey = Math.floor(Math.random() * 9993199) / 212;
            } else {
                generateKey = dataKey
            }

          let query = store.put(data,generateKey)

          query.onerror = function(event){
                console.log(event)
          }
    
        trs.oncomplete = function () {
            db.close()
        }
}

export const getAlldata = (db,table) => {
    const txn = db.transaction([`${table}`], "readonly");
    const objectStore = txn.objectStore(`${table}`);

    objectStore.openCursor().onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
            let contact = cursor.value;
            // continue next record
            cursor.continue();
            console.log(contact);
        }
    };
    // close the database connection
    txn.oncomplete = function () {
        db.close();
    };
}

export const deleteDatabase = (db,table,id) => {
    const trs = db.transaction([`${table}`],'readwrite'),
          store = trs.objectStore(`${table}`)
    
          let query = store.delete(id);

          query.onerror = function(event){
                console.log(event)
          }
    
        trs.oncomplete = function () {
            db.close()
        }
}

export const AddLocalStorage = (name,items) => {
    localStorage.setItem(name,items)
}
export const GetLocalStorage = (name) => {
    localStorage.getItem(name)
}

export const PostMessage = (id,data) => {
    const myIframe = document.getElementById(id)
    const iframeWindow = myIframe.contentWindow
    return iframeWindow.postMessage(data,iframeWindow.location.href)
    // console.log(iframeWindow.postMessage)
}

// if(window.location.pathname === '/configuration'){
//     window.addEventListener('load', () => {
//         PostMessage('frame-preview',{state:false})
//     })
// }

export const changeFormateDate = (date,type) => {
//     var mydate = new Date(date);
//     var str = mydate.toString(type);

//    return str
    var mydate = new Date(date);
    var month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
    var str = month + ' ' + mydate.getFullYear();

    return str
}