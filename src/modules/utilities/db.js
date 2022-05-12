var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

export const DB = "BBG_DB";
export const IMAGES = "BGG_DB_IMAGES"
export const DETAILS = "BGG_DB_DETAILS"
export const CACHE = "BGG_DB_CACHE"

function connect(name, version = 4) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(name, version);
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            db.createObjectStore(IMAGES, { keyPath: "id" });
            db.createObjectStore(DETAILS, { keyPath: "id" });
            db.createObjectStore(CACHE, { keyPath: "id" });
        };;
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        request.onblocked = () => { console.log('blocked'); };
    });
}

function add_to_db(conn, table, key, value) {
    return new Promise((resolve, reject) => {
        const tx = conn.transaction(table, "readwrite");
        const store = tx.objectStore(table);
        const request = store.put({ id: key, data: value });
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

function get_from_db(conn, table, key) {
    return new Promise((resolve, reject) => {
        const tx = conn.transaction(table, "readonly");
        const store = tx.objectStore(table);
        const request = store.get(key);
        request.onsuccess = () => resolve(request && request.result && request.result.data);
        request.onerror = () => reject(request.error);
    });
}

export const add = async (table, key, data) => {
    let conn;
    try {
        conn = await connect(DB);
        await add_to_db(conn, table, key, data);
    } catch (exception) {
        console.error(exception);
    } finally {
        if (conn)
            conn.close();
    }
}

export const get = async (table, key) => {
    let conn;
    try {
        conn = await connect(DB);
        return await get_from_db(conn, table, key);
    } catch (exception) {
        console.error(exception);
    } finally {
        if (conn)
            conn.close();
    }
}

export default { IMAGES, DETAILS, CACHE, add, get };