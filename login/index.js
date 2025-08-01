import { setCookieWithExpireHour } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/cookie.js";
import { onClick, getValue } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/element.js";
import { postJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/api.js";
import { redirect } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.8/url.js";

onClick("submit", PostSignUp);

function PostSignUp() {
  let datainjson = {
    "username": getValue("username"),
    "password": getValue("password")
  };
  postJSON("http://localhost:3000/login", datainjson, responseFunction, errorHandler);
}

function responseFunction(result) {
  console.log("Hasil login:", result);

  if (result?.data?.token) {
    setCookieWithExpireHour("token", result.data.token, 2);
    redirect("http://127.0.0.1:5500/core/dashboard/dashboard.html");
  } else {
    alert("Login gagal: Username atau password salah.");
  }
}

// Fungsi jika request gagal (server down, 500, dsb)
function errorHandler(error) {
  console.error("Request error:", error);
  alert("Terjadi kesalahan saat menghubungi server. Silakan coba lagi.");
}
