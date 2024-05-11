<!-- ParentComponent.vue -->
<template>
    <div class="container-xxl flex-grow-1 container-p-y">
    <div>
      <button class="btn btn-info" @click="showModal">Show Modal</button>
      <modal ref="modal">
        <template v-slot:header>
          <!-- Header content here -->
        </template>
        <template v-slot:body>
          <!-- Body content here -->
        </template>
        <template v-slot:footer>
          <!-- Footer content here -->
        </template>
      </modal>
    </div>
</div>
  </template>
  
  <script>
  import Modal from "./Modal.vue";
  
  export default {
    components: {
      Modal,
    },
    methods: {
      showModal() {
        const element = this.$refs.modal.$el;
        $(element).modal("show");
      },
    },
  };
  </script>
  