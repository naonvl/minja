<script setup lang="ts">
definePage({
  meta: {
    action: "read",
    subject: "AclDemo",
  },
});

const router = useRouter();
const userData = useCookie<any>("userData");
console.log(userData.value);

const employeeData = ref<any>({});
const payslipsData = ref<any>({});

const routeTo = (route: string) => {
  router.replace(route);
};

const dashboardCardData = ref([
  {
    icon: "tabler-rosette-discount-check",
    color: "primary",
    title: "Dikerjakan Minggu Ini",
    value: "0",
    currency: null,
    unit: "Pcs",
    change: 18.2,
    isHover: false,
  },
  {
    icon: "tabler-decimal",
    color: "warning",
    title: "Estimasi Gaji Minggu Ini",
    value: "0",
    currency: "Rp.",
    unit: null,
    change: -8.7,
    isHover: false,
  },
  {
    icon: "tabler-file-dollar",
    color: "success",
    title: "Total Gaji",
    value: "0",
    currency: "Rp. ",
    unit: null,
    change: 4.3,
    isHover: false,
  },
]);
const fetchEmployee = async () => {
  const response = await useApi<any>(
    "/employees/" + userData.value?.employee.id
  );
  const values = await response.data.value;
  employeeData.value = values.data;
  const responsePayslip = await useApi<any>("/payslips/user/" + values.data.id);
  const payslipValues = await responsePayslip.data.value;
  payslipsData.value = payslipValues;
  dashboardCardData.value[0].value = values.data.totalActivities;
  dashboardCardData.value[1].value = `${values.data.estSalary.toLocaleString(
    "id-ID"
  )}`;
  dashboardCardData.value[2].value = `${payslipValues.data.total_amount.toLocaleString(
    "id-ID"
  )}`;
};
if (userData.value?.user_type == "client") {
  fetchEmployee();
}
</script>
<template>
  <div class="mb-6">
    <VBtn
      @click="routeTo('/apps/activities/create')"
      prepend-icon="tabler-plus"
    >
      Input Aktifitas
    </VBtn>
  </div>
  <VRow v-if="userData.user_type == 'client'">
    <VCol
      v-for="(data, index) in dashboardCardData"
      :key="index"
      cols="12"
      md="3"
      sm="6"
    >
      <div>
        <VCard
          class="logistics-card-statistics cursor-pointer"
          :style="
            data.isHover
              ? `border-block-end-color: rgb(var(--v-theme-${data.color}))`
              : `border-block-end-color: rgba(var(--v-theme-${data.color}),0.38)`
          "
          @mouseenter="data.isHover = true"
          @mouseleave="data.isHover = false"
        >
          <VCardText>
            <div class="d-flex align-center gap-x-4 mb-1">
              <VAvatar variant="tonal" :color="data.color" rounded>
                <VIcon :icon="data.icon" size="28" />
              </VAvatar>
              <h4 class="text-h4" v-if="data.currency">
                <span class="text-sm">{{ data.currency }}</span>
                {{ data.value }}
              </h4>
              <h4 class="text-h4" v-if="data.unit">
                {{ data.value }}
                <span class="text-sm">{{ data.unit }}</span>
              </h4>
            </div>
            <div class="text-sm mb-1">
              {{ data.title }}
            </div>
          </VCardText>
        </VCard>
      </div>
    </VCol>
  </VRow>
</template>
