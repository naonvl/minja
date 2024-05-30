<script setup lang="ts">
definePage({
  meta: {
    action: "read",
    subject: "AclDemo",
  },
});
import { ref, watch } from "vue";
import { useApi } from "../../../../composables/useApi";
const router = useRouter();
const optionCounter = ref(1);
const masterEmployeeData: any = ref([]);
const masterTaskData = ref([]);
const masterProdukData = ref([]);
const masterBrandData = ref([]);
const form = ref({
  employee: "Pilih Karyawan",
  activities: [
    {
      qty: null,
      brand: "Pilih Brand",
      task: "Pilih Tugas",
      product: "Pilih Produk",
    },
  ],
});
const fetchEmployees = async () => {
  try {
    const response = await useApi("/data-masters?all=1", {
      method: "GET",
    });
    if (response.data.value) {
      const data: any = await response.data.value;
      const dataMasters = data.data;

      const taskData = dataMasters.filter(
        (item: any) => item.tipe_master_data === "Tugas"
      );
      const productData = dataMasters.filter(
        (item: any) => item.tipe_master_data === "Produk"
      );
      const brandData = dataMasters.filter(
        (item: any) => item.tipe_master_data === "Brand"
      );
      const taskDataMasters = taskData.map((item: any) => ({
        title: item.name,
        value: item.id,
      }));
      const productDataMasters = productData.map((item: any) => ({
        title: item.name,
        value: item.id,
      }));
      const brandDataMasters = brandData.map((item: any) => ({
        title: item.name,
        value: item.id,
      }));

      const employeeRes = await useApi("/employees", {
        method: "GET",
      });
      const employee: any = await employeeRes.data.value;
      const employeeData = employee.data;
      const employeeDataMasters = employeeData.map((item: any) => ({
        title: item.fullname,
        value: item.id,
      }));
      masterEmployeeData.value = employeeDataMasters;
      masterTaskData.value = taskDataMasters;
      masterProdukData.value = productDataMasters;
      masterBrandData.value = brandDataMasters;
    }
  } catch (error) {
    console.error(error);
  }
};
fetchEmployees();
const removeItem = (index: number) => {
  optionCounter.value -= 1;
  form.value.activities.splice(index, 1);
  form.value.activities.splice(index, 1);
  form.value.activities.splice(index, 1);
  form.value.activities.splice(index, 1);
};
const addItem = () => {
  optionCounter.value = optionCounter.value + 1;
  form.value.activities.push({
    qty: null,
    brand: "Pilih Brand",
    task: "Pilih Tugas",
    product: "Pilih Produk",
  });
};
const handleSubmit = async () => {
  const response = await $api("/activities", {
    method: "POST",
    body: {
      employee_id: form.value.employee,
      activities: form.value.activities,
    },
  });
  console.log(await response);
  localStorage.removeItem("unsavedFormData");
  router.replace("/apps/activities/list");
};
watch(
  () => form.value,
  (newValue) => {
    localStorage.setItem("unsavedFormData", JSON.stringify(newValue));
  },
  { deep: true }
);
const storedFormData = localStorage.getItem("unsavedFormData");
if (storedFormData) {
  form.value = JSON.parse(storedFormData);
  optionCounter.value = JSON.parse(storedFormData).activities.length;
}
</script>
<template>
  <div>
    <div class="d-flex flex-wrap justify-space-between gap-y-4 gap-x-6 mb-6">
      <div class="d-flex flex-column justify-center">
        <h4 class="text-h4 font-weight-medium">Input Aktifitas</h4>
      </div>

      <div class="d-flex gap-4 align-center flex-wrap">
        <VBtn color="primary" @click="handleSubmit"> Simpan </VBtn>
      </div>
    </div>
    <VRow>
      <VCol cols="12">
        <VCard title="Karyawan">
          <VCardText>
            <div class="d-flex flex-column gap-y-4">
              <AppSelect
                v-model="form.employee"
                :items="masterEmployeeData"
                label="Karyawan"
                placeholder="Select Item"
              />
            </div>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12">
        <VCard title="Aktifitas">
          <VCardText>
            <template v-for="i in optionCounter" :key="i">
              <div class="border rounded pa-3 mb-3">
                <VRow class="position-relative">
                  <VCol cols="12" md="3">
                    <AppSelect
                      v-model="form.activities[i - 1].brand"
                      :items="masterBrandData"
                      label="Brand"
                      placeholder="Select Item"
                    />
                  </VCol>
                  <VCol cols="12" md="3">
                    <AppSelect
                      v-model="form.activities[i - 1].task"
                      :items="masterTaskData"
                      label="Tugas"
                      placeholder="Select Item"
                    />
                  </VCol>
                  <VCol cols="12" md="3">
                    <AppSelect
                      v-model="form.activities[i - 1].product"
                      :items="masterProdukData"
                      label="Produk"
                      placeholder="Select Item"
                    />
                  </VCol>
                  <VCol cols="12" md="3">
                    <AppTextField
                      v-model="form.activities[i - 1].qty"
                      label="Jumlah (Pcs)"
                      placeholder="0"
                    />
                  </VCol>
                  <VBtn
                    icon="tabler-trash"
                    color="error"
                    v-if="optionCounter > 1"
                    @click="removeItem(i)"
                    class="position-absolute"
                    style="top: -20px; right: -20px"
                  />
                </VRow>
              </div>
            </template>

            <VBtn class="mt-6" prepend-icon="tabler-plus" @click="addItem">
              Tambah
            </VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
