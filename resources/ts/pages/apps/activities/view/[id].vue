<script setup lang="ts">
definePage({
  meta: {
    action: "read",
    subject: "AclDemo",
  },
});
const route = useRoute("apps-user-view-id");
console.log("test");

const fetchEmployee = async () => {
  const response = await useApi<any>("/employees" + route.params.id);
  console.log(response);
};
fetchEmployee();
</script>
<template></template>
