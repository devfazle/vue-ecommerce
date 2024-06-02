<script>
import axios from "axios";
import ModalAddPurchasesVue from './ModalAddPurchases.vue';
export default {
  data() {
    return {
      ShowModal: false,
      allPurchases:[],
      url:this.$store.state.base.url+"admin/",
      ttotal:0,
    };
  },
  methods: {
    showf(newValue) {
            this.ShowModal=newValue
        },

    //  =============== get all purchases  ==============================
    getPurchases(){
      axios.get(this.url+"purchases").then((response) => {
        const alldata= response.data.data;
        this.allPurchases = response.data.data;
              });
    },

    //  ===============calculate Total Price to one invoice purchases ===============
    calculateTotalPrice(data) {
  let prices = 0;
  data.forEach((item) => {
    const price = item.price*item.quantity;
    prices += parseInt(price) ;
  });
  return prices;
},

  // =============== Convert UTC time to Bangladesh time (BDT) ===============
    convertToBDT(utcTime) {
  const utcDate = new Date(utcTime);
  utcDate.setHours(utcDate.getHours() + 6);
  //  ===============Format the result as "YYYY-MM-DD hh:mm:ss AM/PM" ===============
  const options = {
    year: 'numeric',month: '2-digit',day: '2-digit',hour: '2-digit',minute: '2-digit',second: '2-digit',hour12: true,};
  const bdtDateTime = utcDate.toLocaleString('en-US', options);
  return bdtDateTime;
}
  },
  mounted(){
    this.getPurchases();
  },
components: {
  ModalAddPurchasesVue,
	}
};
</script>
<template>
  <div class="container-xxl flex-grow-1 container-p-y">
    <ModalAddPurchasesVue :ShowM="ShowModal" @showfunction="showf"/>
    <h4 class="fw-bold py-3 mb-4">
      <span class="text-muted fw-light">Purchases/</span> View All Purchases
    </h4>

    <!-- Basic Layout -->
    <div class="row">
      <div class="col-xl">
        <div class="card mb-4">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="mb-0">Filters</h5>
            <div class="col-md-12 row">
              <div class="col-md-3">
                <select name="" id="" class="form-select">
                  <option value="" selected>📋Created By</option>
                  <option value="">02-01-2024</option>
                  <option value="">02-01-2024</option>
                </select>
              </div>
              <div class="col-md-3">
                <select name="" id="" class="form-select">
                  <option value="" selected>📋Vendor</option>
                </select>
              </div>
              <div class="col-md-3">
                <select name="" id="" class="form-select">
                  <option value="" selected>📋Title</option>
                </select>
              </div>
              <div class="col-md-3">
                <select name="" id="" class="form-select">
                  <option value="" selected>📋Status</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-12 row d-flex justify-content-between align-items-center">
            <div class="row">
              <div class="col-md-3">
                <input type="text" class="form-control" placeholder="🔍 Search Purchases" />
              </div>
              <div class="col-md-5"></div>
              <div class="col-md-4">

<!-- ======================== Purchases Modal start========================== -->
<div class="container">
    <button class="btn btn-info" @click="showf">Show Modal</button>
  </div>
<!-- ============================Purchases Modal End ====================== -->
                <button class="col-md-6 btn btn-dark">Export</button>
                <router-link :to="{ name: 'addpurchases'}" class="col-md-6 btn btn-primary">Add Purchases</router-link>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table m-0 table-striped">
              <thead class="bg-info">
                <tr>
                  <th>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                  </th>
                  <th>INVOICE</th>
                  <th>CREATED</th>
                  <th>VENDOR</th>
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>STATUS</th>
                  <th style="width: 230px" class="text-center">Action</th>
                </tr>
              </thead>
              <!-- <tbody v-for="(data, i) in productlist" :key="i" class="text-center"> -->
              <tbody  class="text-center">
               <tr v-for="(data, i) in allPurchases" :key="i">
                <td>
                  <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                  </td>
                <td>{{ i }}</td>
                <td>{{ convertToBDT(data[0].date) }}</td>
                <td>{{ data[0].user.name}}</td>
                <td>For New LL</td>
                <td>{{ calculateTotalPrice(data,i) }}</td>
                <!-- <td></td> -->
                <!-- <td>{{ data}}</td> -->
                <td>6</td>
                <td>7</td>
               </tr>
              </tbody>
            </table>
            <span class="float-right"> </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
