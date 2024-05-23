<script>
import axios from 'axios'

export default {
    data() {
        return {
            products: [],
            quantity:0,
            product_id: 0,
            id: this.$route.params.id
        }
    },

    methods: {

        getInfo() {
            axios.get('http://127.0.0.1:8000/api/admin/inventory/create')
                .then((result) => {
                    this.products = result.data.data.products;
                    console.log(result.data.data.users);
                })
        },
           

        getinventory() {
            axios.get("http://127.0.0.1:8000/api/admin/inventory/" + this.id + '/edit')
                .then((response) => {
                    const inventory = response.data.data;
                    this.product_id = inventory.product_id;
                  
                });
        },

        updateinventory() {
            const inventoryData = {
            
                product_id: this.product_id,
                quantity: this.quantity
            }

            axios.put("http://127.0.0.1:8000/api/admin/inventory/" +this.id, inventoryData)
                .then((response) => {
                    console.log(response);
                    this.$router.push({name:"Inventorylist"})
                });
        }

    },

    mounted() {
        this.getInfo();
        this.getinventory();
    }
}

</script>


<template>
    <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Inventory Update</h5>
    </div>
    <div class="card-body">
        <div class="mb-3">
         <label class="form-label" for="basic-default-fullname">quantity</label>
         <input v-model="quantity" type="text" class="form-control" id="basic-default-fullname" placeholder="Category Name" />
         </div>
        <div class="mb-3">
            <label class="form-label" for="basic-default-company">Product</label>
            <select class="form-select" v-model="product_id">
                <option selected>Open this select menu</option>
                <option v-for="(p, i) in products" :key="i" :value="p.id">{{ p.name }}</option>
            </select>
        </div>
    
        <button @click="updateinventory()" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>