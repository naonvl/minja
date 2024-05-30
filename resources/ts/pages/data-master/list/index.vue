<script setup lang="ts">
definePage({
  meta: {
    action: "read",
    subject: "AclDemo",
  },
});
import { ref } from "vue";
import { useApi } from "../../../composables/useApi";
import { $api } from "../../../utils/api";
const isDialogVisible = ref(false);
const items = ["Departemen", "Tugas", "Produk", "Brand"];
const currentTab = ref("window-1");
const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
const headers = [
  {
    title: "Nama Tugas",
    key: "name",
    width: !isMobile ? "80%" : "55%",
    maxWidth: "100%",
  },
  {
    title: "Tugas",
    key: "actions",
    sortable: false,
  },
];
const form = ref({
  name: "",
  tipeData: "Select Item",
});
const headersDepartemen = [
  {
    title: "Nama Departemen",
    key: "name",
    width: !isMobile ? "80%" : "55%",
    maxWidth: "100%",
  },
  {
    title: "Tugas",
    key: "actions",
    sortable: false,
  },
];
const headersBrand = [
  {
    title: "Nama Brand",
    key: "name",
    width: !isMobile ? "80%" : "55%",
    maxWidth: "100%",
  },
  {
    title: "Tugas",
    key: "actions",
    sortable: false,
  },
];
const headersProduk = [
  {
    title: "Nama Produk",
    key: "name",
    width: !isMobile ? "80%" : "55%",
    maxWidth: "100%",
  },
  {
    title: "Tugas",
    key: "actions",
    sortable: false,
  },
];
const masterTugasData = ref([
  { id: 1, name: "Buang Benang" },
  { id: 2, name: "Kecos" },
]);
const masterDepartementData = ref([
  { id: 1, name: "Jahit" },
  { id: 2, name: "QC" },
  { id: 3, name: "Potong" },
]);
const masterProdukData: any = ref([]);
const masterBrandData: any = ref([]);

const handleSubmit = async () => {
  try {
    const response = await $api("/data-masters", {
      method: "POST",
      body: {
        name: form.value.name,
        tipeData: form.value.tipeData,
      },
    });

    if (response.data) {
      switch (currentTab.value) {
        case "window-1":
          masterTugasData.value = [
            ...masterTugasData.value,
            {
              id: response.data.id,
              name: response.data.name,
            },
          ];
          break;
        case "window-2":
          masterDepartementData.value = [
            ...masterDepartementData.value,
            {
              id: masterDepartementData.value.length + 1,
              name: form.value.name,
            },
          ];
          break;
        case "window-3":
          masterProdukData.value = [
            ...masterProdukData.value,
            {
              id: masterProdukData.value.length + 1,
              name: form.value.name,
            },
          ];
          break;
        default:
          masterBrandData.value = [
            ...masterBrandData.value,
            {
              id: masterBrandData.value.length + 1,
              name: form.value.name,
            },
          ];
      }
    } else {
      console.error(response.error);
    }
  } catch (error) {
    console.error(error);
  } finally {
    form.value.name = "";
    form.value.tipeData = "";
    isDialogVisible.value = false;
  }
};
const fetchData = async () => {
  try {
    const response = await useApi("/data-masters?all=1", {
      method: "GET",
    });
    if (response.data.value) {
      const data: any = await response.data.value;
      const dataMasters = data.data;

      masterTugasData.value = dataMasters.filter(
        (item: any) => item.tipe_master_data === "Tugas"
      );
      masterDepartementData.value = dataMasters.filter(
        (item: any) => item.tipe_master_data === "Departemen"
      );
      masterProdukData.value = dataMasters.filter(
        (item: any) => item.tipe_master_data === "Produk"
      );
      masterBrandData.value = dataMasters.filter(
        (item: any) => item.tipe_master_data === "Brand"
      );
    } else {
      console.error(response.error);
    }
  } catch (error) {
    console.error(error);
  }
};
const changeTipe = (e: any) => {
  console.log(e);
};
fetchData();
</script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="d-flex justify-sm-space-between">
        <div>
          <h4 class="text-h4 mb-1">Data Master</h4>
          <p class="text-body-1 mb-0">
            Definisikan data data master untuk aplikasi
          </p>
        </div>
        <VDialog v-model="isDialogVisible" persistent width="600">
          <!-- Activator -->
          <template #activator="{ props }">
            <VBtn v-bind="props" prepend-icon="tabler-plus"> Tambah Data </VBtn>
          </template>

          <!-- Dialog close btn -->
          <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

          <!-- Dialog Content -->
          <VCard title="Tambah Data">
            <VCardText>
              <VRow>
                <VCol cols="12" sm="6">
                  <AppSelect
                    @change="changeTipe"
                    :items="items"
                    v-model="form.tipeData"
                    label="Tipe Data"
                    placeholder="Select Item"
                  />
                </VCol>
                <VCol cols="12" sm="6">
                  <AppTextField
                    v-model="form.name"
                    :label="'Nama ' + form.tipeData"
                    placeholder="John"
                  />
                </VCol>
              </VRow>
            </VCardText>

            <VCardText class="d-flex justify-end flex-wrap gap-3">
              <VBtn
                variant="tonal"
                color="secondary"
                v-model="form.tipeData"
                @click="isDialogVisible = false"
              >
                Tutup
              </VBtn>
              <VBtn @click="handleSubmit"> Simpan </VBtn>
            </VCardText>
          </VCard>
        </VDialog>
      </div>
    </VCol>
    <VCol cols="12">
      <VRow>
        <VCol sm="3" cols="12">
          <VTabs v-model="currentTab" direction="vertical" class="v-tabs-pill">
            <VTab>
              <div class="d-flex justify-content-between">Tugas</div>
            </VTab>

            <VTab> Departemen </VTab>

            <VTab> Produk </VTab>
            <VTab> Brand </VTab>
          </VTabs>
        </VCol>

        <VCol sm="9" cols="12">
          <VCard>
            <VCardText>
              <VWindow v-model="currentTab">
                <VWindowItem value="window-1">
                  <VDataTableServer
                    :itemsLength="5"
                    :headers="headers"
                    :items="masterTugasData"
                    :items-per-page="5"
                  >
                    <template #item.actions="{ item }">
                      <IconBtn>
                        <VIcon icon="tabler-edit" />
                      </IconBtn>
                      <IconBtn>
                        <VIcon icon="tabler-trash" />
                      </IconBtn>
                    </template>
                  </VDataTableServer>
                </VWindowItem>

                <VWindowItem value="window-2">
                  <VDataTableServer
                    :itemsLength="5"
                    :headers="headersDepartemen"
                    :items="masterDepartementData"
                    :items-per-page="5"
                  >
                    <template #item.actions="{ item }">
                      <IconBtn>
                        <VIcon icon="tabler-edit" />
                      </IconBtn>
                      <IconBtn>
                        <VIcon icon="tabler-trash" />
                      </IconBtn>
                    </template>
                  </VDataTableServer>
                </VWindowItem>

                <VWindowItem value="window-3">
                  <VDataTableServer
                    :itemsLength="5"
                    :headers="headersProduk"
                    :items="masterProdukData"
                    :items-per-page="5"
                  >
                    <template #item.actions="{ item }">
                      <IconBtn>
                        <VIcon icon="tabler-edit" />
                      </IconBtn>
                      <IconBtn>
                        <VIcon icon="tabler-trash" />
                      </IconBtn>
                    </template>
                  </VDataTableServer>
                </VWindowItem>

                <VWindowItem value="window-3">
                  <VDataTableServer
                    :itemsLength="5"
                    :headers="headersBrand"
                    :items="masterBrandData"
                    :items-per-page="5"
                  >
                    <template #item.actions="{ item }">
                      <IconBtn>
                        <VIcon icon="tabler-edit" />
                      </IconBtn>
                      <IconBtn>
                        <VIcon icon="tabler-trash" />
                      </IconBtn>
                    </template>
                  </VDataTableServer>
                </VWindowItem>
              </VWindow>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
