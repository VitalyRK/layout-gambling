(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.getElementById("change-language-text");document.getElementById("change-language-button").addEventListener("click",()=>{c.innerHTML=c.innerHTML==="EN"?"RU":"EN"});const s=document.getElementById("header__button-menu"),u=document.getElementById("header__button-open"),d=document.getElementById("header__button-close"),l=document.getElementById("navigation");s.addEventListener("click",()=>{u.classList.toggle("hidden-button"),d.classList.toggle("hidden-button"),l.classList.toggle("navigation__active")});