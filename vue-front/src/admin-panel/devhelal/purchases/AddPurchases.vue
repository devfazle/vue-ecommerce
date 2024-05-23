
<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
export default {
    data() {
        return {
            url:"http://localhost:8000/api/admin/",
            quantity:"",
            invoice_number:"",
            unit:"",
            date:new Date().toISOString().slice(0, 16),
            product_id:"",
            user_id:"",
            price:"",
            vendorList:[],
        }
    },
    methods:{
        // ===============Generate a new UUID as the invoice number======================
        invoiceNum(){
            const invoice= "INV:"+uuidv4().substr(0,7);
            this.invoice_number = invoice;
        },
        vendorName(){
            axios.get(this.url+"users").then((res)=>{
                const userlist=res.data.data;
                const filteredUsers = userlist.filter((user) => user.role_id === 3);
                //console.log(filteredUsers);
                this.vendorList=filteredUsers;
            });
        },
        createPurchases(){
            const alldata={
            quantity: this.quantity,
            invoice_number: this.invoice_number,
            unit: this.unit,
            date: this.date,
            product_id: this.product_id,
            user_id: this.user_id,
            price: this.price
            };
            console.log(alldata);
        },
    },
    mounted() {
    this.invoiceNum();
    this.vendorName();
  },
}
</script>

<template>
    <div>
        <div class="container-xxl flex-grow-1 container-p-y text-dark">
            <div class="col-md-12 row">
                <div class="col-md-4 ">
                    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light"></span> Add a New Purcheses </h4>
                </div>
                <div class="col-md-3 "></div>
                <div class="col-md-5 ">
                    <router-link :to="{ name: 'purchaseslist' }" class="btn btn-outline-danger">Discard</router-link>
                    <button class="btn btn-dark ml-2"> Save Draft</button>
                    <button class="btn btn-primary ml-2"> Publish Purcheses</button>
                </div>

            </div>
            <!-- Basic Layout -->
            <div class="row">
                <div class="container">
                    <div class="card">
                        <div class="card-body p-0">
                            <form  @submit.prevent="createPurchases()">
                            <div class="card-body">
                                <div class="card-body">
                                    <strong style="color: red"></strong>

                                    <div class="row">
                                        <div class="col-4">
                                            <div class="form-group row">
                                                <label for>Invioce Number</label>
                                                <div>
                                                    <input type="text" class="form-control" placeholder="Invioce Number"
                                                        v-model="invoice_number" readonly />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <div class="form-group row">
                                                <label>Vendor Name</label>
                                                <div>
                                                    <select class="form-control" v-model="user_id">
                                                                <option value>Select Vendor Name</option>
                                                                <option v-for="(vdata, i) in vendorList" :key="i" :value="vdata.id">
                                                        {{ vdata.name }}
                                                    </option>
                                                            </select>
                                                            <!-- <select class="form-control" v-model="product_id"
                                                    @change="getProductPrice()">
                                                    <option value>Select Product Name</option>
                                                    <option v-for="(pdata, i) in presult" :key="i" :value="pdata.id">
                                                        {{ pdata.name }}
                                                    </option>
                                                </select> -->
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <div class="form-group row">
                                                <label>Added Date</label>
                                                <div>
                                                    <input type="datetime-local" class="form-control" v-model="date"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <table class="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="form-group row">
                                                        <label>Product Name</label>
                                                        <div>
                                                            <select class="form-control">
                                                                <option value>Select Product Name</option>
                                                            </select>
                                                            <!-- <select class="form-control" v-model="product_id"
                                                    @change="getProductPrice()">
                                                    <option value>Select Product Name</option>
                                                    <option v-for="(pdata, i) in presult" :key="i" :value="pdata.id">
                                                        {{ pdata.name }}
                                                    </option>
                                                </select> -->
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-group row">
                                                        <label>Product Quantity</label>
                                                        <div>
                                                            <input type="number" class="form-control"
                                                                placeholder="Product Quantity" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-group row">
                                                        <label>Product Unit</label>
                                                        <div>
                                                            <input type="number" class="form-control"
                                                                placeholder="Product Unit" readonly />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-group row">
                                                        <label>Product Unit Price</label>
                                                        <div>
                                                            <input type="number" class="form-control"
                                                                placeholder="Product Unit Price" 
                                                                readonly />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-group row">
                                                        <label>Total Price</label>
                                                        <div>
                                                            <input type="number" class="form-control"
                                                                placeholder="Total" readonly />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <hr />
                                    <div class="row">
                                        <div class="col-8"></div>
                                        <div class="col-4"></div>
                                    </div>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                            <!-- /.card-body -->
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
