<script setup lang="ts">
import { ref } from "vue";
const userData = useCookie("userData").value;
const user = JSON.parse(JSON.stringify(userData));
const isDialogVisible = ref(false);
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const form = ref({
  dates: "",
});
const progress = ref(0);
const interval = ref();
const isGenerating = ref(false);
const items = ["Foo", "Bar", "Fizz", "Buzz"];
const orderBy = ref();
const searchQuery = ref("");
const employees: any = ref([]);
const paySlips: any = ref([]);
const limits = [
  { value: 10, title: "10" },
  { value: 25, title: "25" },
  { value: 50, title: "50" },
  { value: 100, title: "100" },
  { value: -1, title: "All" },
];
const totalUsers = ref(5);
const headers = [
  { title: "#", key: "number", width: "5%" },
  { title: "Nama", key: "name" },
  { title: "Detail", key: "payslipitems" },
  { title: "Total", key: "total" },
  { title: "Status", key: "status" },
  { title: "Aksi", key: "actions", sortable: false, width: "10%" },
];
function deleteUser(id: number) {
  console.log(`Delete user with ID ${id}`);
}
const resolveUserStatusVariant = (stat: string) => {
  const statLowerCase = stat.toLowerCase();
  if (statLowerCase === "pending") return "warning";
  if (statLowerCase === "active") return "success";
  if (statLowerCase === "inactive") return "secondary";

  return "primary";
};
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const fetchPayslips = async () => {
  try {
    const response = await useApi("/payslips?all=1", {
      method: "GET",
    });
    if (response.data.value) {
      const data: any = await response.data.value;
      console.log(data);
      paySlips.value = data.data;
    } else {
      // console.error(response.data.error);
    }
  } catch (error) {
    console.error(error);
  }
};
fetchPayslips();
const generatePaySlip = async () => {};
const handleSubmit = async () => {
  let dateArray = form.value.dates.split(" to ");
  let startDate = dateArray[0];
  let endDate = dateArray[1];
  progress.value = 0;
  isGenerating.value = true;
  const response = await $api("/generate-payslip", {
    method: "POST",
    body: {
      start_date: startDate,
      end_date: endDate,
    },
  });
  console.log(await response.data);
  isDialogVisible.value = false;
  fetchProgress();
};
const fetchProgress = async () => {
  try {
    const response = await useApi("/payslip-progress", {
      method: "GET",
    });
    const value: any = await response.data.value;
    progress.value = value.progress;
    console.log(value);

    if (value.progress < 100) {
      setTimeout(fetchProgress, 1000); // Fetch progress every second
    } else {
      isGenerating.value = false;
      fetchPayslips(); // Fetch updated payslips after generation is complete
    }
  } catch (error) {
    console.error(error);
  }
};

const payAll = async () => {
  const response = await $api("/payall-payslip", {
    method: "POST",
    body: {},
  });
  fetchPayslips();
};
const unpaidAll = async () => {
  const response = await $api("/unpaidall-payslip", {
    method: "POST",
    body: {},
  });
  console.log(await response.data);
  fetchPayslips();
};
const formatCurrency = (amount: number) => {
  return `${amount.toLocaleString("id-ID")}`;
};
</script>
<template>
  <VCard class="mb-6">
    <VCardItem class="pb-4">
      <VCardTitle>Daftar Slip Gaji Karyawan</VCardTitle>
    </VCardItem>

    <VDivider />

    <VCardText class="d-flex flex-wrap gap-4">
      <div class="me-3 d-flex gap-3">
        <AppSelect
          :model-value="itemsPerPage"
          :items="limits"
          style="inline-size: 6.25rem"
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        />
      </div>
      <VSpacer v-if="!isMobile" />

      <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
        <!-- 👉 Search  -->
        <div v-if="!isMobile" style="inline-size: 15.625rem">
          <AppTextField v-model="searchQuery" placeholder="Search User" />
        </div>
        <VProgressCircular
          v-if="isGenerating"
          :rotate="360"
          :size="30"
          :width="3"
          :model-value="progress"
          color="primary"
        >
          {{ progress }}
        </VProgressCircular>
        <!-- 👉 Export button -->
        <!-- <VBtn
          size="small"
          @click="generatePaySlip"
          variant="tonal"
          prepend-icon="tabler-report"
          :disabled="isGenerating"
        >
          Generate
        </VBtn> -->
        <VDialog
          v-if="user.user_type == 'admin'"
          v-model="isDialogVisible"
          persistent
          width="600"
        >
          <!-- Activator -->
          <template #activator="{ props }">
            <VBtn
              @click="isDialogVisible = true"
              size="small"
              variant="tonal"
              v-bind="props"
              prepend-icon="tabler-report"
            >
              Generate
            </VBtn>
          </template>

          <!-- Dialog close btn -->
          <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

          <!-- Dialog Content -->
          <VCard title="Generate Slip Gaji">
            <VCardText>
              <VRow>
                <VCol cols="12">
                  <AppDateTimePicker
                    v-model="form.dates"
                    label="Tanggal Mulai"
                    placeholder="Tanggal Mulai"
                    :config="{ mode: 'range' }"
                  />
                </VCol>
              </VRow>
            </VCardText>

            <VCardText class="d-flex justify-end flex-wrap gap-3">
              <VBtn
                variant="tonal"
                color="secondary"
                @click="isDialogVisible = false"
              >
                Tutup
              </VBtn>
              <VBtn @click="handleSubmit"> Simpan </VBtn>
            </VCardText>
          </VCard>
        </VDialog>
        <VBtn
          size="small"
          @click="payAll"
          variant="tonal"
          color="success"
          prepend-icon="tabler-file-check"
        >
          Pay All
        </VBtn>
        <VBtn
          size="small"
          @click="unpaidAll"
          variant="tonal"
          color="warning"
          prepend-icon="tabler-file-x"
        >
          Unpaid All
        </VBtn>
      </div>
    </VCardText>

    <VDivider />

    <!-- SECTION datatable -->
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :items-length="totalUsers"
      :items="paySlips"
      :headers="headers"
      class="text-no-wrap"
    >
      <template #item.number="{ index }">
        {{ index + 1 }}
      </template>
      <!-- User -->
      <template #item.name="{ item }: any">
        <div class="d-flex align-center gap-x-4">
          <div class="d-flex flex-column">
            <h6 class="text-base">
              <p class="font-weight-medium text-link">
                {{ item.employee.fullname }}
              </p>
            </h6>
          </div>
        </div>
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
                    v-for="(payslipItem, index) in item.payslip_items"
                    :key="index"
                  >
                    <td class="text-body-1">{{ payslipItem.activityName }}</td>
                    <td class="text-body-1">
                      Rp. {{ formatCurrency(payslipItem.salary) }}
                    </td>
                    <td class="text-body-1">{{ payslipItem.quantity }} Pcs</td>
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
          :color="resolveUserStatusVariant(item.status)"
          size="small"
          label
          class="text-capitalize"
        >
          {{ item.status }}
        </VChip>
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }: any">
        <IconBtn @click="deleteUser(item.id)">
          <VIcon icon="tabler-eye" />
        </IconBtn>
        <IconBtn @click="deleteUser(item.id)">
          <VIcon icon="tabler-edit" />
        </IconBtn>
        <IconBtn v-if="user.user_type == 'admin'" @click="deleteUser(item.id)">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </template>

      <!-- pagination -->
      <template #bottom>
        <TablePagination
          v-model:page="page"
          :items-per-page="itemsPerPage"
          :total-items="totalUsers"
        />
      </template>
    </VDataTableServer>
    <!-- SECTION -->
  </VCard>
</template>
