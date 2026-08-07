// =====================================================
// Firebase Authentication 연동
// 로그인 성공 시에만 script.js의 renderPortal()이 호출되어
// 포털 내용이 화면에 그려집니다.
// =====================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// ★ Firebase 콘솔 > 프로젝트 설정 > 내 앱 에서 복사한 값
const firebaseConfig = {
  apiKey: "AIzaSyD4mk-_lT1XEd209eMKw2eHEb_gMtkDLQI",
  authDomain: "bongwon-portal.firebaseapp.com",
  projectId: "bongwon-portal",
  storageBucket: "bongwon-portal.firebasestorage.app",
  messagingSenderId: "1091916349610",
  appId: "1:1091916349610:web:7f3e49609d431b9aa410d3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 새로고침해도 로그인 상태 유지 (로그아웃 전까지)
setPersistence(auth, browserLocalPersistence).catch(() => {});

const authScreen = document.getElementById("authScreen");
const appContent = document.getElementById("appContent");
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("loginEmail");
const passwordInput = document.getElementById("loginPassword");
const errorMsg = document.getElementById("loginError");
const logoutBtn = document.getElementById("logoutBtn");
const submitBtn = loginForm.querySelector("button[type='submit']");

// ---- 로그인 상태에 따라 화면 전환 ----
onAuthStateChanged(auth, user => {
  if (user) {
    authScreen.classList.add("hidden");
    appContent.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    if (typeof renderPortal === "function") renderPortal();
  } else {
    authScreen.classList.remove("hidden");
    appContent.classList.add("hidden");
    logoutBtn.classList.add("hidden");
  }
});

// ---- 로그인 폼 제출 ----
loginForm.addEventListener("submit", event => {
  event.preventDefault();
  errorMsg.textContent = "";
  submitBtn.disabled = true;
  submitBtn.textContent = "확인 중...";

  signInWithEmailAndPassword(auth, emailInput.value.trim(), passwordInput.value)
    .catch(error => {
      errorMsg.textContent = describeError(error.code);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "로그인";
      passwordInput.value = "";
    });
});

// ---- 로그아웃 ----
logoutBtn.addEventListener("click", () => {
  signOut(auth);
});

function describeError(code) {
  switch (code) {
    case "auth/invalid-email":
      return "이메일 형식이 올바르지 않습니다.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "이메일 또는 비밀번호가 올바르지 않습니다.";
    case "auth/too-many-requests":
      return "시도 횟수가 많습니다. 잠시 후 다시 시도해 주세요.";
    case "auth/network-request-failed":
      return "네트워크 오류입니다. 인터넷 연결을 확인해 주세요.";
    default:
      return "로그인에 실패했습니다. 다시 시도해 주세요.";
  }
}
