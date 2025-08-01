import {postJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/api.min.js";
import {getValue, onClick, addCSS} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/element.min.js";
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/src/sweetalert2.js';
await addCSS("https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.css");

const urlBackend = "https://n-pts-yang-contamination.trycloudflare.com";

onClick("submit", postSignUp);

function postSignUp() {
    let datainjson = {
        "username": getValue("username"),
        "password": getValue("password")
    };
    postJSON(urlBackend + "/signup", datainjson, responseFunction);
}

function responseFunction(result) {
    Swal.fire("Sukses", result.message, "success");
}
