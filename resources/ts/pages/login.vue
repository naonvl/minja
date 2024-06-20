<script setup lang="ts">
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import authV2LoginIllustrationBorderedDark from "@images/pages/auth-v2-login-illustration-bordered-dark.png";
import authV2LoginIllustrationBorderedLight from "@images/pages/auth-v2-login-illustration-bordered-light.png";
import authV2LoginIllustrationDark from "@images/pages/auth-v2-login-illustration-dark.png";
import authV2LoginIllustrationLight from "@images/pages/auth-v2-login-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { VForm } from "vuetify/components/VForm";

const router = useRouter();
const ability = useAbility();
const route = useRoute();

definePage({ meta: { layout: "blank", unauthenticatedOnly: true } });

const form = ref({
  username: "",
  password: "",
  remember: false,
});

const errorMessage = ref("");

const isDialogVisible = ref(false);
watch(isDialogVisible, (value) => {
  if (!value) return;

  setTimeout(() => {
    isDialogVisible.value = false;
  }, 4000);
});
const login = async () => {
  isDialogVisible.value = true;
  const res = await $api("/auth/login", {
    method: "POST",
    body: {
      username: form.value.username,
      password: form.value.password,
    },
    onResponseError({ response }: any) {
      isDialogVisible.value = false;
      errorMessage.value = response._data.message;
      // errors.value = response._data.errors
    },
  });

  const { accessToken, userData, userAbilityRules } = res;
  console.log(userData);

  useCookie("userAbilityRules").value = userAbilityRules;
  ability.update(userAbilityRules);
  useCookie("userData").value = userData;
  useCookie("accessToken").value = accessToken;

  // Redirect to `to` query if exist or redirect to index route
  // ❗ nextTick is required to wait for DOM updates and later redirect
  await nextTick(() => {
    router.replace(route.query.to ? String(route.query.to) : "/");
  });
};
const isPasswordVisible = ref(false);

const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true
);

const fetch = async () => {
  const response = await $api("http://192.168.100.205:8801/messages");
  console.log(await response);
};
// setInterval(fetch, 1000);
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);
</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow no-gutters class="auth-wrapper bg-surface">
    <VDialog v-model="isDialogVisible" width="300">
      <VCard color="primary" width="300">
        <VCardText class="pt-3">
          Please stand by
          <VProgressLinear
            indeterminate
            bg-color="rgba(var(--v-theme-surface), 0.1)"
            :height="8"
            class="mb-0 mt-4"
          />
        </VCardText>
      </VCard>
    </VDialog>
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <div
          class="d-flex align-center justify-center w-100 h-100"
          style="padding-inline: 6.25rem"
        >
          <VImg
            max-width="613"
            :src="authThemeImg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <img
          class="auth-footer-mask"
          :src="authThemeMask"
          alt="auth-footer-mask"
          height="280"
          width="100"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">
            Welcome to
            <span class="text-capitalize"> {{ themeConfig.app.title }} </span>!
            👋🏻
          </h4>
          <!-- <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p> -->
        </VCardText>
        <!-- <VCardText>
          <VAlert
            color="primary"
            variant="tonal"
          >
            <p class="text-sm mb-2">
              Admin username: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong>
            </p>
            <p class="text-sm mb-0">
              Client username: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
            </p>
          </VAlert>
        </VCardText> -->
        <VCardText>
          <VForm @submit.prevent="login">
            <VRow>
              <!-- username -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.username"
                  autofocus
                  label="username"
                  type="text"
                  placeholder="johndoe@username.com"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                  "
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div
                  class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4"
                >
                  <VCheckbox v-model="form.remember" label="Remember me" />
                  <a class="text-primary ms-2 mb-1" href="#">
                    Forgot Password?
                  </a>
                </div>

                <VBtn block type="submit"> Login </VBtn>
                <!-- Error message -->
                <VAlert
                  v-if="errorMessage"
                  type="error"
                  variant="outlined"
                  class="my-4"
                >
                  {{ errorMessage }}
                </VAlert>
              </VCol>

              <!-- create account -->
              <!-- <VCol
                cols="12"
                class="text-center"
              >
                <span>New on our platform?</span>

                <a
                  class="text-primary ms-2"
                  href="#"
                >
                  Create an account
                </a>
              </VCol> -->
              <!-- <VCol
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol> -->

              <!-- auth providers -->
              <!-- <VCol
                cols="12"
                class="text-center"
              >
                <AuthProvider />
              </VCol> -->
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
