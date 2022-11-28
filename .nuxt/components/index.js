export const NuxtLogo = () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const ContactContent = () => import('../..\\components\\contact-us\\ContactContent.vue' /* webpackChunkName: "components/contact-content" */).then(c => wrapFunctional(c.default || c))
export const ContactUsHeroContact = () => import('../..\\components\\contact-us\\HeroContact.vue' /* webpackChunkName: "components/contact-us-hero-contact" */).then(c => wrapFunctional(c.default || c))
export const HomeAbout = () => import('../..\\components\\home\\About.vue' /* webpackChunkName: "components/home-about" */).then(c => wrapFunctional(c.default || c))
export const HomeContent = () => import('../..\\components\\home\\Content.vue' /* webpackChunkName: "components/home-content" */).then(c => wrapFunctional(c.default || c))
export const HomeHero = () => import('../..\\components\\home\\Hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c))
export const LoginForm = () => import('../..\\components\\login\\LoginForm.vue' /* webpackChunkName: "components/login-form" */).then(c => wrapFunctional(c.default || c))
export const SchedulesScheduleContainer = () => import('../..\\components\\schedules\\ScheduleContainer.vue' /* webpackChunkName: "components/schedules-schedule-container" */).then(c => wrapFunctional(c.default || c))
export const SignupRegistrationForm = () => import('../..\\components\\signup\\RegistrationForm.vue' /* webpackChunkName: "components/signup-registration-form" */).then(c => wrapFunctional(c.default || c))
export const AdminBookContainer = () => import('../..\\components\\admin\\book\\BookContainer.vue' /* webpackChunkName: "components/admin-book-container" */).then(c => wrapFunctional(c.default || c))
export const AdminDepartureManagement = () => import('../..\\components\\admin\\departure\\DepartureManagement.vue' /* webpackChunkName: "components/admin-departure-management" */).then(c => wrapFunctional(c.default || c))
export const AdminReturnManagement = () => import('../..\\components\\admin\\return\\ReturnManagement.vue' /* webpackChunkName: "components/admin-return-management" */).then(c => wrapFunctional(c.default || c))
export const ClientProfileEditForm = () => import('../..\\components\\client\\profile\\EditForm.vue' /* webpackChunkName: "components/client-profile-edit-form" */).then(c => wrapFunctional(c.default || c))
export const ClientProfileForm = () => import('../..\\components\\client\\profile\\ProfileForm.vue' /* webpackChunkName: "components/client-profile-form" */).then(c => wrapFunctional(c.default || c))
export const GeneralDialogConfirmation = () => import('../..\\components\\general\\Dialog\\DialogConfirmation.vue' /* webpackChunkName: "components/general-dialog-confirmation" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
