<script setup lang="ts">
import { ref } from "vue";
const userData = useCookie("userData").value;
const user = JSON.parse(JSON.stringify(userData));
const isDialogVisible = ref(false);
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const form = ref({
  username: "",
  fullname: "",
  email: "",
  department: "Select Item",
  password: "",
  confirmPassword: "",
});
const items = ["Foo", "Bar", "Fizz", "Buzz"];
const orderBy = ref();
const searchQuery = ref("");
const employees: any = ref([]);
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
  { title: "Nama", key: "id" },
  { title: "Departemen", key: "department" },
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
const masterdepartmentData = ref([]);
const openModal = async () => {
  const response = await useApi("/data-masters?tipeData=department", {
    method: "GET",
  });
  const data: any = await response.data.value;
  const dataMasters = data.data.map((item: any) => ({
    title: item.name,
    value: item.id,
  }));
  masterdepartmentData.value = dataMasters;
  isDialogVisible.value = true;
};
const handleSubmit = async () => {
  console.log(form.value);

  if (
    form.value.confirmPassword == "" ||
    form.value.confirmPassword != form.value.password
  )
    return;
  try {
    const response = await $api("/employees", {
      method: "POST",
      body: {
        fullname: form.value.fullname,
        department: form.value.department,
        email: form.value.email,
        password: form.value.password,
        username: form.value.username,
      },
    });

    if (response.data) {
      console.log(response.data);

      isDialogVisible.value = false;
    } else {
      console.error(response.error);
    }
  } catch (error) {
    console.error(error);
  } finally {
    // form.value.name = "";
    // form.value.tipeData = "";
    // isDialogVisible.value = false;
  }
};
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const fetchEmployees = async () => {
  try {
    const response = await useApi("/employees", {
      method: "GET",
    });
    if (response.data.value) {
      const data: any = await response.data.value;
      console.log(data);
      employees.value = data.data;
    } else {
      // console.error(response.data.error);
    }
  } catch (error) {
    console.error(error);
  }
};
fetchEmployees();
</script>
<template>
  <VCard class="mb-6">
    <VCardItem class="pb-4">
      <VCardTitle>Daftar Karyawan</VCardTitle>
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

        <!-- 👉 Export button -->
        <!-- <VBtn variant="tonal" color="secondary" prepend-icon="tabler-upload">
          Export
        </VBtn> -->

        <!-- 👉 Add user button -->
        <VDialog
          v-if="user.user_type == 'admin'"
          v-model="isDialogVisible"
          persistent
          width="600"
        >
          <!-- Activator -->
          <template #activator="{ props }">
            <VBtn @click="openModal" v-bind="props" prepend-icon="tabler-plus">
              Tambah Karyawan
            </VBtn>
          </template>

          <!-- Dialog close btn -->
          <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

          <!-- Dialog Content -->
          <VCard title="Tambah Karyawan">
            <VCardText>
              <VRow>
                <VCol cols="12" sm="6">
                  <AppTextField
                    v-model="form.fullname"
                    label="Nama Lengkap"
                    placeholder="John"
                  />
                </VCol>
                <VCol cols="12" sm="6">
                  <AppSelect
                    v-model="form.department"
                    :items="masterdepartmentData"
                    label="Departemen"
                    placeholder="Select Item"
                  />
                </VCol>
                <VCol cols="12" sm="6">
                  <AppTextField
                    v-model="form.email"
                    label="Email"
                    placeholder="johndoe@email.com"
                  />
                </VCol>
                <VCol cols="12" sm="6">
                  <AppTextField
                    v-model="form.username"
                    label="Username"
                    placeholder="John"
                  />
                </VCol>
                <VCol cols="12" sm="6">
                  <AppTextField
                    v-model="form.password"
                    label="Password"
                    autocomplete="on"
                    type="password"
                    placeholder="············"
                  />
                </VCol>
                <VCol cols="12" sm="6">
                  <AppTextField
                    v-model="form.confirmPassword"
                    label="Confirm Password"
                    autocomplete="on"
                    type="password"
                    placeholder="············"
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
              <VBtn
                :disabled="
                  form.confirmPassword == '' ||
                  form.password !== form.confirmPassword
                "
                @click="handleSubmit"
              >
                Simpan
              </VBtn>
            </VCardText>
          </VCard>
        </VDialog>
      </div>
    </VCardText>

    <VDivider />

    <!-- SECTION datatable -->
    <VDataTableServer
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      :items="employees"
      :items-length="totalUsers"
      :headers="headers"
      class="text-no-wrap"
    >
      <template #item.number="{ index }">
        {{ index + 1 }}
      </template>
      <!-- User -->
      <template #item.id="{ item }: any">
        <div class="d-flex align-center gap-x-4">
          <div class="d-flex flex-column">
            <h6 class="text-base">
              <RouterLink
                v-if="user.user_type == 'admin'"
                :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                class="font-weight-medium text-link"
              >
                {{ item.fullname }}
              </RouterLink>
              <p
                v-if="user.user_type != 'admin'"
                class="font-weight-medium text-link"
              >
                {{ item.fullname }}
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
