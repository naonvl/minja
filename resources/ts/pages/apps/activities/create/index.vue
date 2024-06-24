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
const optionCounter = ref([1]);
const masterEmployeeData: any = ref([]);
const masterTaskData = ref([]);
const masterProdukData = ref([]);
const masterBrandData = ref([]);
const form: any = ref([]);
const fetchEmployees = async () => {
  try {
    const response = await useApi("/data-masters?all=1", {
      method: "GET",
    });
    if (response.data.value) {
      const data: any = await response.data.value;
      const dataMasters = data.data;

      const taskData = dataMasters.filter(
        (item: any) => item.type_master_data === "task"
      );
      const productData = dataMasters.filter(
        (item: any) => item.type_master_data === "produk"
      );
      const brandData = dataMasters.filter(
        (item: any) => item.type_master_data === "brand"
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
      const storedFormData = localStorage.getItem("unsavedFormData");

      employeeDataMasters.forEach((employee: any, index: number) => {

        if (storedFormData) {
          form.value[employee.value] = JSON.parse(storedFormData)[employee.value];
          optionCounter.value[employee.value] = JSON.parse(storedFormData)[employee.value].activities.length;
        } else {
          form.value[employee.value] = {
            employee: employee.value,
            activities: [
              {
                qty: null,
                brand: "Pilih Brand",
                task: "Pilih Tugas",
                product: "Pilih Produk",
              }
            ]
          }
          optionCounter.value[employee.value] = 1;
        }
      });
      masterEmployeeData.value = employeeDataMasters;
      selectedEmployee.value = employeeDataMasters[0];
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
  optionCounter.value[selectedEmployee.value.value] -= 1;
  form.value[selectedEmployee.value.value].activities.splice(index, 1);
  form.value[selectedEmployee.value.value].activities.splice(index, 1);
  form.value[selectedEmployee.value.value].activities.splice(index, 1);
  form.value[selectedEmployee.value.value].activities.splice(index, 1);
};
const addItem = () => {
  optionCounter.value[selectedEmployee.value.value] = optionCounter.value[selectedEmployee.value.value] + 1;
  form.value[selectedEmployee.value.value].activities.push({
    qty: null,
    brand: "Pilih Brand",
    task: "Pilih Tugas",
    product: "Pilih Produk",
  });
};
const handleSubmit = async () => {
  await Promise.all(form.value.map(async (form: any) => {
    if (form.activities[0].task && form.activities[0].task !== 'Pilih Tugas' && form.activities[0].task !== 'null' && form.activities[0].qty > 0) {
      const response = await $api("/activities", {
        method: "POST",
        body: {
          employee_id: form.employee,
          activities: form.activities,
        },
      });
      console.log(response);
    } else {
      console.log("Task is required");
    }
  }));
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


const currentTab = ref('window1')
const selectedEmployee = ref({
  title: '',
  value: 1
})

const handleTabClick = (employee: any) => {
  selectedEmployee.value = employee;
  console.log(employee);

}
</script>

<template>
  <VTabs v-model="currentTab" class="v-tabs-pill">
    <VTab @click="handleTabClick(employee)" v-for="(employee, index) in masterEmployeeData" :key="employee.value">
      {{ index + 1 }}. {{ employee.title }} <span v-if="form[employee.value].activities[0].qty > 0"
        style="font-weight: bold;margin-left: 5px;"> [{{ form[employee.value].activities.length }}]</span>
    </VTab>
  </VTabs>

  <div v-if="form[selectedEmployee.value]" class="mt-5">
    <VWindow v-model="currentTab">
      <VWindowItem v-for="item in optionCounter.length" :key="`window${item}`">
        <VCard :title="'Aktifitas ' + selectedEmployee.title">
          <VCardText>
            <template v-for="i in optionCounter[selectedEmployee.value]" :key="i">
              <div class="border rounded pa-3 mb-3">
                <VRow class="position-relative">
                  <VCol cols="12" md="3">
                    <AppSelect v-model="form[selectedEmployee.value].activities[i - 1].brand" :items="masterBrandData"
                      label="Brand" placeholder="Select Item" />
                  </VCol>
                  <VCol cols="12" md="3">
                    <AppSelect v-model="form[selectedEmployee.value].activities[i - 1].task" :items="masterTaskData"
                      label="Tugas" placeholder="Select Item" />
                  </VCol>
                  <VCol cols="12" md="3">
                    <AppSelect v-model="form[selectedEmployee.value].activities[i - 1].product"
                      :items="masterProdukData" label="Produk" placeholder="Select Item" />
                  </VCol>
                  <VCol cols="12" md="3">
                    <AppTextField v-model="form[selectedEmployee.value].activities[i - 1].qty" label="Jumlah (Pcs)"
                      placeholder="0" />
                  </VCol>
                  <VBtn icon="tabler-trash" color="error" v-if="optionCounter[selectedEmployee.value] > 1"
                    @click="removeItem(i)" class="position-absolute" style="top: -20px; right: -20px" />
                </VRow>
              </div>
            </template>

            <div class="d-flex justify-end">
              <VBtn class="mt-6" prepend-icon="tabler-plus" @click="addItem">
                Tambah
              </VBtn>
            </div>
          </VCardText>
        </VCard>
      </VWindowItem>
    </VWindow>
    <div class="w-full d-flex justify-end">
      <VBtn class="mt-6" prepend-icon="tabler-check" color="success" @click="handleSubmit">
        Simpan Semua
      </VBtn>
    </div>
  </div>
</template>
