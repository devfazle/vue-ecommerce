<script>
import axios from 'axios'

export default {
    data() {
        return {
            product: [],
            quantity:0,
            product_id:0,
        }
    },

    methods: {
        getinventories() {
            axios.get('http://127.0.0.1:8000/api/admin/inventory/create')
                .then((result) => {
                    this.product = result.data.data.products;
                    console.log(result.data.data.users);
                })
        },
        storeinventorylist() {
            const inventorydata = {
              
                product_id: this.product_id, 
            }

           // console.log(inventorydata);

            axios.post("http://127.0.0.1:8000/api/admin/inventorylist", inventorydata)
                .then((response) => {
                    console.log(response)
                   this.$router.push({name:"inventorylist"})
                });
               

        }

    },
    mounted() {
        this.getinventories()
    }
}

</script>

<template>
    <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Name</h5>
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
                <option v-for="(p, i) in product" :key="i" :value="p.id">{{ p.name }}</option>
            </select>
        </div>
        <button @click="storeinventorylist()" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>