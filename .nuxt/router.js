import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02ddb6ad = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _55f949ef = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _838e5ef8 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _4351b8e4 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _4925f3d1 = () => interopDefault(import('..\\pages\\schedules\\index.vue' /* webpackChunkName: "pages/schedules/index" */))
const _3ce7b7d5 = () => interopDefault(import('..\\pages\\admin\\book\\index.vue' /* webpackChunkName: "pages/admin/book/index" */))
const _39ea58e2 = () => interopDefault(import('..\\pages\\admin\\dashboard\\index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _75a57e82 = () => interopDefault(import('..\\pages\\admin\\departure\\index.vue' /* webpackChunkName: "pages/admin/departure/index" */))
const _f46973a4 = () => interopDefault(import('..\\pages\\admin\\return\\index.vue' /* webpackChunkName: "pages/admin/return/index" */))
const _ccd2a286 = () => interopDefault(import('..\\pages\\client\\home\\index.vue' /* webpackChunkName: "pages/client/home/index" */))
const _224f2b62 = () => interopDefault(import('..\\pages\\client\\profile\\index.vue' /* webpackChunkName: "pages/client/profile/index" */))
const _9c015276 = () => interopDefault(import('..\\pages\\client\\profile\\edit\\index.vue' /* webpackChunkName: "pages/client/profile/edit/index" */))
const _0ff07f27 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _02ddb6ad,
    name: "contact"
  }, {
    path: "/inspire",
    component: _55f949ef,
    name: "inspire"
  }, {
    path: "/login",
    component: _838e5ef8,
    name: "login"
  }, {
    path: "/register",
    component: _4351b8e4,
    name: "register"
  }, {
    path: "/schedules",
    component: _4925f3d1,
    name: "schedules"
  }, {
    path: "/admin/book",
    component: _3ce7b7d5,
    name: "admin-book"
  }, {
    path: "/admin/dashboard",
    component: _39ea58e2,
    name: "admin-dashboard"
  }, {
    path: "/admin/departure",
    component: _75a57e82,
    name: "admin-departure"
  }, {
    path: "/admin/return",
    component: _f46973a4,
    name: "admin-return"
  }, {
    path: "/client/home",
    component: _ccd2a286,
    name: "client-home"
  }, {
    path: "/client/profile",
    component: _224f2b62,
    name: "client-profile"
  }, {
    path: "/client/profile/edit",
    component: _9c015276,
    name: "client-profile-edit"
  }, {
    path: "/",
    component: _0ff07f27,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
