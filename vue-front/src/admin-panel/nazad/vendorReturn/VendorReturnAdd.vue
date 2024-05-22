<script>
import axios from 'axios'

export default {
    data() {
        return {
            orders: [],
            date:new Date().toISOString().slice(0, 16),
            purchase_invoice: "",
            product_id: "",
            quantity: "",
            reason: "",
            refund: "a",
        }
    },

    methods: {
        getALl() {
            var value1 = parseFloat($('#getAll').val()) || 0;
            console.log(value1)
            // axios.get(`${this.urll}/${value1}/edit`)
            //     .then((result) => {
            //         this.amount= result.data.data.total_price
            //     });
        },
        getInfo() {
            axios.get('http://127.0.0.1:8000/api/admin/orders')
                .then((result) => {
                    this.orders = result.data.data;
                    console.log(this.orders);
                })
        },
        storeData() {
            const shipData = {
                delivery_date: this.delivery_date,
                purchase_invoice: this.purchase_invoice,
                product_id: this.product_id,
                quantity: this.quantity,
                reason: this.reason,
                refund: this.refund,
            }

            console.log('true');

            axios.post("http://127.0.0.1:8000/api/admin/vendorreturns", shipData)
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: 'shipment-list' });
                });
        }

    },

    mounted() {
        this.getInfo();
    }
}

</script>

<template>
    <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Vendor Return Add</h5>
    </div>
    <div class="card-body">
            <strong style="color: red"></strong>

            <div class="row">
                <div class="col-4">
                    <div class="form-group row">
                        <label for>Invioce Number</label>
                        <div>
                            <input type="text" id="getAll" class="form-control" placeholder="Purchase Invioce Number"
                                v-model="purchase_invoice" v-on:focusout="getALl"/>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="form-group row">
                        <label>Vendor Name</label>
                        <div>
                            <input type="text" class="form-control"
                                readonly/>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="form-group row">
                        <label>Return Date</label>
                        <div>
                            <input type="datetime-local" class="form-control" v-model="date" />
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
                                    <select  class="form-control" v-model="product_id">
                                        <option value>Product Name</option>
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
                                    <select  class="form-control" v-model="quantity">
                                        <option value>Quantity</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-group row">
                                <label>Product Unit</label>
                                <div>
                                    <input type="number" class="form-control" placeholder="Product Unit" readonly />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-group row">
                                <label>Product Unit Price</label>
                                <div>
                                    <input type="number" class="form-control" placeholder="Product Unit Price"
                                        readonly />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="form-group row">
                                <label>Total Price</label>
                                <div>
                                    <input type="number" class="form-control" placeholder="Total" readonly />
                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        <hr />
        <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">Reason</label>
            <input v-model="reason" type="text" class="form-control" id="basic-default-fullname"
                placeholder="reason" />
        </div>
        <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">Refund</label>
            <select v-model="refund" class="form-control">
                <option value="a">select refund</option>
                <option value="pending">Pending</option>
                <option value="complete">Complete</option>
            </select>
        </div>
        <router-link :to="{ name: 'vendor-return-list' }" class="btn brn-sm btn-primary">Back</router-link> &nbsp;
        <button @click="storeData" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>