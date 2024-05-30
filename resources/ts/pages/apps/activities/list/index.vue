<script setup lang="ts">
definePage({
  meta: {
    action: "read",
    subject: "AclDemo",
  },
});
import { ref } from "vue";

const userData = useCookie<any>("userData");
const router = useRouter();
const itemsPerPage = ref(10);
const page = ref(1);

const orderBy = ref();
const searchQuery = ref("");
const activities: any = ref([]);
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
  { title: "Nama", key: "fullname" },
  { title: "Nama", key: "activities" },
  { title: "Tanggal", key: "date" },
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
const create = () => {
  router.replace("/apps/activities/create");
};
const fetchActivities = async () => {
  try {
    let url = "/activities";
    if (userData.value.user_type === "client") {
      url += `?user_id=${userData.value?.employee.id}`;
    }
    const response = await useApi(url, {
      method: "GET",
    });

    if (response.data.value) {
      const data: any = await response.data.value;
      console.log(data);

      activities.value = data.data;
    } else {
      // console.error(response.data.error);
    }
  } catch (error) {
    console.error(error);
  }
};
fetchActivities();
</script>
<template>
  <div>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Daftar Aktifitas Karyawan</VCardTitle>
      </VCardItem>
      <VDivider />

      <VCardText class="d-flex flex-wrap justify-space-between gap-4">
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
          <div style="inline-size: 15.625rem">
            <AppTextField
              v-model="searchQuery"
              placeholder="Search Aktifitas"
            />
          </div>

          <!-- 👉 Add user button -->
          <VBtn @click="create" prepend-icon="tabler-plus">
            Input Aktifitas
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items="activities"
        :items-length="totalUsers"
        :headers="headers"
        class="text-no-wrap"
      >
        <template #item.number="{ index }">
          {{ index + 1 }}
        </template>
        <!-- User -->
        <template #item.user="{ item }: any">
          <div class="d-flex align-center gap-x-4">
            <div class="d-flex flex-column">
              <h6 class="text-base">
                <p class="font-weight-medium text-link">
                  {{ item.fullname }}
                </p>
              </h6>
            </div>
          </div>
        </template>
        <template #item.activities="{ item }: any">
          <div class="d-flex align-center gap-x-4">
            <div class="d-flex flex-column">
              <h6 class="text-base">
                <p class="font-weight-medium text-link mb-0 pa-2">
                  <span
                    v-for="(activity, index) in item.activities"
                    :key="index"
                  >
                    <br v-if="index > 0 && index != item.activities.length" />
                    {{ activity }}
                  </span>
                </p>
              </h6>
            </div>
          </div>
        </template>
        <template #item.date="{ item }: any">
          <div class="d-flex align-center gap-x-4">
            <div class="d-flex flex-column">
              <h6 class="text-base">
                <p class="font-weight-medium text-link">
                  {{ item.date }}
                </p>
              </h6>
            </div>
          </div>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }: any">
          <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-eye" />
          </IconBtn>
          <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-edit" />
          </IconBtn>
          <IconBtn @click="deleteUser(item.id)">
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
  </div>
</template>
