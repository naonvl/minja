<script setup lang="ts">
const route = useRoute("apps-user-view-id");

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
const headersGaji = [
  {
    title: "Nama Gaji",
    key: "name",
  },
  {
    title: "Nominal (Per Pcs)",
    key: "amount",
  },
  {
    title: "Aksi",
    key: "actions",
    sortable: false,
  },
];
const headersSlipGaji = [
  {
    title: "Aktifitas",
    key: "name",
  },
  {
    title: "Nominal (Per Pcs)",
    key: "amount",
  },
  {
    title: "Aksi",
    key: "actions",
    sortable: false,
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
  {
    title: "Aksi",
    key: "actions",
    sortable: false,
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
const masterProdukData = ref([]);
const masterSlipGajiData = ref([]);
const fetchEmployee = async () => {
  const response = await useApi<any>("/employees/" + route.params.id);
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
  switch (role) {
    case "inactive":
      return { color: "warning", icon: "tabler-user" };
    case "Active":
      return { color: "success", icon: "tabler-circle-check" };
    default:
      return { color: "primary", icon: "tabler-user" };
  }
};
const simpanGaji = async () => {
  try {
    const response = await $api("/salaries", {
      method: "POST",
      body: {
        employee_id: employeeData.value.id,
        task_type_id: formGaji.value.task_type_id,
        product_id: formGaji.value.product_id,
        amount: Number(formGaji.value.amount),
      },
    });

    if (response.data) {
      masterGajiData.value = [
        ...masterGajiData.value,
        {
          id: masterGajiData.value.length + 1,
          name: response.data.value.name,
          nominal: response.data.value.amount,
        },
      ];
      isGajiDialogVisible.value = false;
    } else {
      console.error(response.error);
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
};
const simpanBenefit = async () => {
  try {
    const response = await $api("/benefits", {
      method: "POST",
      body: {
        employee_id: employeeData.value.id,
        name: formBenefit.value.name,
        amount: Number(formBenefit.value.amount),
      },
    });

    if (response.data) {
      masterBenefitData.value = [
        ...masterBenefitData.value,
        {
          id: masterBenefitData.value.length + 1,
          name: formBenefit.value.name,
          nominal: formBenefit.value.amount,
        },
      ];
      isBenefitDialogVisible.value = false;
    } else {
      console.error(response.error);
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
};
const openGajiModal = async () => {
  isGajiDialogVisible.value = true;
  const response = await useApi("/data-masters?all=1", {
    method: "GET",
  });
  if (response.data.value) {
    const data: any = await response.data.value;
    const dataMasters = data.data;

    const tugasData = dataMasters.filter(
      (item: any) => item.type_master_data === "task"
    );
    const produkData = dataMasters.filter(
      (item: any) => item.type_master_data === "produk"
    );
    masterTugasData.value = tugasData.map((item: any) => ({
      title: item.name,
      value: item.id,
    }));
    masterProdukData.value = produkData.map((item: any) => ({
      title: item.name,
      value: item.id,
    }));
  } else {
    console.error(response.error);
  }
};
const suspendEmployee = async () => {
  const response = await $api("/employees/fire", {
    method: "POST",
    body: {
      employee_id: employeeData.value.id,
    },
  });
  const data = await response;
  if (data.status == 200) {
    employeeData.value.status = "Inactive";
  } else {
    console.log();
  }
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
        <VCardText class="d-flex justify-center gap-x-4">
          <VBtn variant="elevated"> Edit </VBtn>

          <VBtn variant="tonal" color="error" @click="suspendEmployee">
            Suspend
          </VBtn>
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

                  <div>
                    <VDialog
                      v-model="isGajiDialogVisible"
                      persistent
                      width="600"
                    >
                      <!-- Activator -->
                      <template #activator="{ props }">
                        <VBtn
                          @click="openGajiModal"
                          v-bind="props"
                          prepend-icon="tabler-plus"
                        >
                          Tambah Gaji
                        </VBtn>
                      </template>

                      <!-- Dialog close btn -->
                      <DialogCloseBtn
                        @click="isGajiDialogVisible = !isGajiDialogVisible"
                      />

                      <!-- Dialog Content -->
                      <VCard title="Tambah Gaji">
                        <VCardText>
                          <VRow>
                            <VCol cols="12" sm="6">
                              <AppSelect
                                v-model="formGaji.task_type_id"
                                :items="masterTugasData"
                                label="Tugas"
                                placeholder="Select Item"
                              />
                            </VCol>
                            <VCol cols="12" sm="6">
                              <AppSelect
                                v-model="formGaji.product_id"
                                :items="masterProdukData"
                                label="Produk"
                                placeholder="Select Item"
                              />
                            </VCol>
                            <VCol cols="12" sm="6">
                              <AppTextField
                                v-model="formGaji.amount"
                                label="Nominal Per Pcs"
                                placeholder="0"
                                type="number"
                              />
                            </VCol>
                          </VRow>
                        </VCardText>
                        <VCardText class="d-flex justify-end flex-wrap gap-3">
                          <VBtn
                            variant="tonal"
                            color="secondary"
                            @click="isGajiDialogVisible = false"
                          >
                            Tutup
                          </VBtn>
                          <VBtn @click="simpanGaji"> Simpan </VBtn>
                        </VCardText>
                      </VCard>
                    </VDialog>
                  </div>
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
                  <template #item.actions="{ item }">
                    <IconBtn>
                      <VIcon icon="tabler-edit" />
                    </IconBtn>
                    <IconBtn>
                      <VIcon icon="tabler-trash" />
                    </IconBtn>
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

                  <div>
                    <VDialog
                      v-model="isBenefitDialogVisible"
                      persistent
                      width="600"
                    >
                      <!-- Activator -->
                      <template #activator="{ props }">
                        <VBtn
                          @click="isBenefitDialogVisible = true"
                          v-bind="props"
                          prepend-icon="tabler-plus"
                        >
                          Tambah Benefit
                        </VBtn>
                      </template>

                      <!-- Dialog close btn -->
                      <DialogCloseBtn
                        @click="
                          isBenefitDialogVisible = !isBenefitDialogVisible
                        "
                      />

                      <!-- Dialog Content -->
                      <VCard title="Tambah Benefit">
                        <VCardText>
                          <VRow>
                            <VCol cols="12" sm="6">
                              <AppTextField
                                v-model="formBenefit.name"
                                label="Nama Benefit"
                                placeholder="0"
                                type="text"
                              />
                            </VCol>
                            <VCol cols="12" sm="6">
                              <AppTextField
                                v-model="formBenefit.amount"
                                label="Nominal Per Minggu"
                                placeholder="0"
                                type="number"
                              />
                            </VCol>
                          </VRow>
                        </VCardText>
                        <VCardText class="d-flex justify-end flex-wrap gap-3">
                          <VBtn
                            variant="tonal"
                            color="secondary"
                            @click="isBenefitDialogVisible = false"
                          >
                            Tutup
                          </VBtn>
                          <VBtn @click="simpanBenefit"> Simpan </VBtn>
                        </VCardText>
                      </VCard>
                    </VDialog>
                  </div>
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
                  <template #item.actions="{ item }">
                    <IconBtn>
                      <VIcon icon="tabler-edit" />
                    </IconBtn>
                    <IconBtn>
                      <VIcon icon="tabler-trash" />
                    </IconBtn>
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
                  :itemsLength="5"
                  :headers="headersSlipGaji"
                  :items="masterSlipGajiData"
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
                  <template #item.actions="{ item }">
                    <IconBtn>
                      <VIcon icon="tabler-edit" />
                    </IconBtn>
                    <IconBtn>
                      <VIcon icon="tabler-trash" />
                    </IconBtn>
                  </template>
                </VDataTableServer>
              </VCard>
            </VCol>
          </VRow>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
