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
        <h5 class="mb-0">Vendor Return Edit</h5>
    </div>
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">Purchase Invoice Number</label>
            <input v-model="purchase_invoice" type="text" class="form-control" id="basic-default-fullname"
                placeholder="Purchase Invoice Number" readonly/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">Product</label>
            <input v-model="product_id" type="text" class="form-control" id="basic-default-fullname"
                placeholder="product" />
        </div>
        <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">Quantity</label>
            <input v-model="quantity" type="text" class="form-control" id="basic-default-fullname"
                placeholder="product" />
        </div>
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
        <button @click="storeData" type="submit" class="btn btn-primary">Update</button>
    </div>
</template>