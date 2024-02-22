export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      requiresNotAuth: true,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignupView.vue'),
    meta: {
      requiresNotAuth: true,
    },
  },
  {
    path: '/oidc/verification',
    name: 'oidcVerification',
    component: () => import('@/views/OidcVerificationView.vue'),
  },
]
