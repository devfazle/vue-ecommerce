<script>
import axios from "axios";

export default {
  data() {
    return {
      cupons: [],
      code: "",
      percentage: "",
      valid_from: "",
      valid_to: "",
      max_uses: "",
      use_count: "",
    };
  },

  methods: {
    getCupons() {
      axios.get("http://127.0.0.1:8000/api/admin/cupons").then((result) => {
        this.cupons = result.data.data;
        console.log(this.cupons);
      });
    },
    storeCupons() {
      const cuponsData = {
        code: this.code,
        percentage: this.percentage,
        valid_from: this.valid_from,
        valid_to: this.valid_to,
        max_uses: this.max_uses,
        use_count: this.use_count,
      };

      console.log("ok");

      axios
        .post("http://127.0.0.1:8000/api/admin/cupons", cuponsData)
        .then((response) => {
          console.log(response);
          this.$router.push('/admin/coupons/coupons-list')
        });
    },
  },

  mounted() {
    this.getCupons();
  },
};
</script>
<template>
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Add Coupons</h5>
  </div>
  <div class="card-body">
    <div class="mb-3">
      <label class="form-label" for="basic-default-fullname">Code</label>
      <input
        v-model="code"
        type="text"
        class="form-control"
        id="basic-default-fullname"
        placeholder="coupons code here"
      />
    </div>
    <div class="mb-3">
      <label class="form-label" for="basic-default-fullname">Percentage</label>
      <input
        v-model="percentage"
        type="number"
        class="form-control"
        id="basic-default-fullname"
        placeholder="percentage"
      />
    </div>
    <div class="mb-3">
      <label class="form-label" for="valid-from">Valid From</label>
      <input
        v-model="valid_from"
        type="datetime-local"
        class="form-control"
        id="valid-from"
        placeholder="YYYY-MM-DD"
      />
      <input type="hidden" v-model="formattedValidFrom" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="valid-to">Valid To</label>
      <input
        v-model="valid_to"
        type="datetime-local"
        class="form-control"
        id="valid-to"
        placeholder="YYYY-MM-DD"
      />
      <input type="hidden" v-model="formattedValidTo" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="basic-default-fullname">Max Uses</label>
      <input
        v-model="max_uses"
        type="text"
        class="form-control"
        id="basic-default-fullname"
        placeholder="max_uses"
      />
    </div>
    <div class="mb-3">
      <label class="form-label" for="basic-default-fullname">Use Count</label>
      <input
        v-model="use_count"
        type="text"
        class="form-control"
        id="basic-default-fullname"
        placeholder="use count"
      />
    </div>
    <button @click="storeCupons" type="submit" class="btn btn-primary">
      Submit
    </button>
  </div>
</template>