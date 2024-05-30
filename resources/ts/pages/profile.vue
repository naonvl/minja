<script setup lang="ts">
definePage({
  meta: {
    action: "read",
    subject: "AclDemo",
  },
});
const userData = useCookie<any>("userData");
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const isGajiDialogVisible = ref(false);
const isBenefitDialogVisible = ref(false);
const userTab = ref(null);
const tabs = [
  { icon: "tabler-users", title: "Akun" },
  { icon: "tabler-bookmark", title: "Gaji" },
  { icon: "tabler-bookmark", title: "Slip Gaji" },
];
const formGaji = ref({
  task_type_id: "Pilih Tugas",
  product_id: "Pilih Produk",
  amount: null,
});
const formBenefit = ref({
  name: "",
  amount: null,
});
const isNewPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const employeeData = ref<any>({});
const headersSlipGaji = [
  { title: "#", key: "number", width: "5%" },
  { title: "Detail", key: "payslipitems" },
  { title: "Total", key: "total" },
  { title: "Status", key: "status" },
];
const headersGaji = [
  {
    title: "Nama Gaji",
    key: "name",
  },
  {
    title: "Nominal (Per Pcs)",
    key: "amount",
  },
];
const headersBenefit = [
  {
    title: "Nama Bonus",
    key: "name",
  },
  {
    title: "Nominal (Per Minggu)",
    key: "amount",
  },
];
const masterGajiData = ref<any>([
  {
    name: "Buang Benang Mukena",
    amount: 200,
  },
  {
    name: "Buang Benang Kerudung",
    amount: 2000,
  },
]);
const masterBenefitData = ref<any>([
  {
    name: "Jabatan",
    amount: 200,
  },
]);
const masterTugasData = ref([]);
const masterPaySlipData = ref([]);
const masterSlipGajiData = ref([]);
const fetchPayslips = async () => {
  try {
    const response = await useApi(
      "/payslips?employee_id=" + userData.value?.employee.id,
      {
        method: "GET",
      }
    );
    if (response.data.value) {
      const data: any = await response.data.value;
      console.log(data);
      masterPaySlipData.value = data.data;
    } else {
      // console.error(response.data.error);
    }
  } catch (error) {
    console.error(error);
  }
};
fetchPayslips();
const fetchEmployee = async () => {
  const response = await useApi<any>(
    "/employees/" + userData.value?.employee.id
  );
  const values = await response.data.value;
  employeeData.value = values.data;
  console.log(values);
  masterGajiData.value = values.data.salaries;
  masterBenefitData.value = values.data.benefits;
};
fetchEmployee();
const formatCurrency = (amount: number) => {
  return `${amount.toLocaleString("id-ID")}`;
};
const resolveUserRoleVariant = (role: string) => {
  switch (role) {
    case "Jahit":
      return { color: "warning", icon: "tabler-user" };
    case "QC":
      return { color: "success", icon: "tabler-circle-check" };
    default:
      return { color: "primary", icon: "tabler-user" };
  }
};
const resolveUserStatusVariant = (role: string) => {
  const statLowerCase = role.toLowerCase();
  switch (statLowerCase) {
    case "inactive":
      return { color: "warning", icon: "tabler-user" };
    case "pending":
      return { color: "warning", icon: "tabler-user" };
    case "active":
      return { color: "success", icon: "tabler-circle-check" };
    case "paid":
      return { color: "success", icon: "tabler-circle-check" };
    default:
      return { color: "primary", icon: "tabler-user" };
  }
};
const resolveStatusVariant = (stat: string) => {
  const statLowerCase = stat.toLowerCase();
  if (statLowerCase === "pending") return "warning";
  if (statLowerCase === "active") return "success";
  if (statLowerCase === "inactive") return "secondary";

  return "primary";
};
</script>
<template>
  <VRow v-if="employeeData.department">
    <VCol cols="12" md="5" lg="4">
      <VCard>
        <VCardText class="text-center pt-12">
          <h5 class="text-h5 mt-4">
            {{ employeeData.fullname }}
          </h5>
          <VChip
            :color="resolveUserRoleVariant(employeeData.department.name).color"
            label
            size="small"
            class="text-capitalize mt-4"
          >
            {{ employeeData.department.name }}
          </VChip>
          <VChip
            :color="resolveUserStatusVariant(employeeData.status).color"
            label
            size="small"
            class="text-capitalize mt-4 ml-5"
          >
            {{ employeeData.status }}
          </VChip>
          <VCardText class="px-0">
            <div class="d-flex justify-center gap-y-2 flex-wrap mb-6">
              <!-- 👉 Done task -->
              <div class="d-flex align-center me-8">
                <VAvatar
                  :size="30"
                  rounded
                  color="primary"
                  variant="tonal"
                  class="me-4"
                >
                  <VIcon icon="tabler-checkbox" size="24" />
                </VAvatar>
                <div>
                  <h5 class="text-h5">
                    <span class="text-xs">Rp.</span>
                    {{ formatCurrency(employeeData.estSalary) }}
                  </h5>
                  <span class="text-sm">Estimasi Gaji</span>
                </div>
              </div>

              <!-- 👉 Done Project -->
              <div class="d-flex align-center me-4">
                <VAvatar
                  :size="30"
                  rounded
                  color="primary"
                  variant="tonal"
                  class="me-4"
                >
                  <VIcon icon="tabler-briefcase" size="24" />
                </VAvatar>
                <div>
                  <h5 class="text-h5">
                    {{ employeeData.totalActivities }}
                    <span class="text-xs">Pcs</span>
                  </h5>
                  <span class="text-sm">Selesai</span>
                </div>
              </div>
            </div>
          </VCardText>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" md="7" lg="8">
      <VTabs v-model="userTab" class="v-tabs-pill">
        <VTab v-for="tab in tabs" :key="tab.icon">
          <VIcon :size="18" :icon="tab.icon" class="me-1" />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>
      <VWindow
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <VRow>
            <VCol cols="12">
              <VCard title="Ganti Username">
                <VCardText>
                  <VForm @submit.prevent="() => {}">
                    <VRow>
                      <VCol cols="12" md="6">
                        <AppTextField
                          label="Username Lama"
                          v-model="employeeData.user.username"
                          placeholder=""
                          :disabled="true"
                          type="text"
                        />
                      </VCol>
                      <VCol cols="12" md="6">
                        <AppTextField
                          label="Username Baru"
                          placeholder="username"
                          type="text"
                        />
                      </VCol>

                      <VCol cols="12">
                        <VBtn type="submit"> Simpan </VBtn>
                      </VCol>
                    </VRow>
                  </VForm>
                </VCardText>
              </VCard>
            </VCol>
            <VCol cols="12">
              <VCard title="Ganti Password">
                <VCardText>
                  <VForm @submit.prevent="() => {}">
                    <VRow>
                      <VCol cols="12" md="6">
                        <AppTextField
                          label="New Password"
                          placeholder="············"
                          :type="isNewPasswordVisible ? 'text' : 'password'"
                          :append-inner-icon="
                            isNewPasswordVisible
                              ? 'tabler-eye-off'
                              : 'tabler-eye'
                          "
                          @click:append-inner="
                            isNewPasswordVisible = !isNewPasswordVisible
                          "
                        />
                      </VCol>
                      <VCol cols="12" md="6">
                        <AppTextField
                          label="Confirm Password"
                          placeholder="············"
                          :type="isConfirmPasswordVisible ? 'text' : 'password'"
                          :append-inner-icon="
                            isConfirmPasswordVisible
                              ? 'tabler-eye-off'
                              : 'tabler-eye'
                          "
                          @click:append-inner="
                            isConfirmPasswordVisible = !isConfirmPasswordVisible
                          "
                        />
                      </VCol>

                      <VCol cols="12">
                        <VBtn type="submit"> Simpan </VBtn>
                      </VCol>
                    </VRow>
                  </VForm>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </VWindowItem>
        <VWindowItem>
          <VRow>
            <VCol cols="12">
              <VCard>
                <VCardText
                  class="d-flex justify-space-between align-center flex-wrap gap-4"
                >
                  <h5 class="text-h5">Daftar Gaji</h5>
                </VCardText>
                <VDivider />
                <VDataTableServer
                  :itemsLength="5"
                  :headers="headersGaji"
                  :items="masterGajiData"
                  :items-per-page="5"
                >
                  <template #item.amount="{ item }: any">
                    <div class="d-flex align-center gap-x-4">
                      <div class="d-flex flex-column">
                        <h6 class="text-base">
                          <p class="font-weight-medium text-link">
                            {{ formatCurrency(item.amount) }}
                          </p>
                        </h6>
                      </div>
                    </div>
                  </template>
                </VDataTableServer>
              </VCard>
            </VCol>
            <VCol cols="12">
              <VCard>
                <VCardText
                  class="d-flex justify-space-between align-center flex-wrap gap-4"
                >
                  <h5 class="text-h5">Daftar Bonus & Tunjangan</h5>
                </VCardText>
                <VDivider />
                <VDataTableServer
                  :itemsLength="5"
                  :headers="headersBenefit"
                  :items="masterBenefitData"
                  :items-per-page="5"
                >
                  <template #item.amount="{ item }: any">
                    <div class="d-flex align-center gap-x-4">
                      <div class="d-flex flex-column">
                        <h6 class="text-base">
                          <p class="font-weight-medium text-link">
                            {{ formatCurrency(item.amount) }}
                          </p>
                        </h6>
                      </div>
                    </div>
                  </template>
                </VDataTableServer>
              </VCard>
            </VCol>
          </VRow>
        </VWindowItem>
        <VWindowItem>
          <VRow>
            <VCol cols="12">
              <VCard>
                <VCardText
                  class="d-flex justify-space-between align-center flex-wrap gap-4"
                >
                  <h5 class="text-h5">Daftar Slip Gaji</h5>
                </VCardText>
                <VDivider />
                <VDataTableServer
                  v-model:items-per-page="itemsPerPage"
                  v-model:page="page"
                  :items-length="masterPaySlipData.values.length"
                  :items="masterPaySlipData"
                  :headers="headersSlipGaji"
                  class="text-no-wrap"
                >
                  <template #item.number="{ index }">
                    {{ index + 1 }}
                  </template>

                  <template #item.payslipitems="{ item }: any">
                    <div class="d-flex align-center gap-x-4 pa-3">
                      <div class="d-flex flex-column">
                        <h6 class="text-base">
                          <VTable class="text-no-wrap border">
                            <thead>
                              <tr>
                                <th>Nama Aktifitas</th>
                                <th>Gaji</th>
                                <th>Kuantiti</th>
                                <th>Sub Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(
                                  payslipItem, index
                                ) in item.payslip_items"
                                :key="index"
                              >
                                <td class="text-body-1">
                                  {{ payslipItem.activityName }}
                                </td>
                                <td class="text-body-1">
                                  Rp. {{ formatCurrency(payslipItem.salary) }}
                                </td>
                                <td class="text-body-1">
                                  {{ payslipItem.quantity }} Pcs
                                </td>
                                <td class="text-body-1">
                                  Rp. {{ formatCurrency(payslipItem.total) }}
                                </td>
                              </tr>
                            </tbody>
                          </VTable>
                        </h6>
                      </div>
                    </div>
                  </template>
                  <template #item.total="{ item }: any">
                    <div class="d-flex align-center gap-x-4">
                      <div class="d-flex flex-column">
                        <h6 class="text-base">
                          <p class="font-weight-medium text-link">
                            Rp. {{ formatCurrency(item.total) }}
                          </p>
                        </h6>
                      </div>
                    </div>
                  </template>
                  <!-- Status -->
                  <template #item.status="{ item }: any">
                    <VChip
                      :color="resolveStatusVariant(item.status)"
                      size="small"
                      label
                      class="text-capitalize"
                    >
                      {{ item.status }}
                    </VChip>
                  </template>

                  <!-- Actions -->

                  <!-- pagination -->
                  <!-- <template #bottom>
                    <TablePagination
                      v-model:page="page"
                      :items-per-page="itemsPerPage"
                      :total-items="totalUsers"
                    />
                  </template> -->
                </VDataTableServer>
              </VCard>
            </VCol>
          </VRow>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
