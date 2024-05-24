<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col">
                    <h5 class="mb-0">Inventory List</h5>
                </div>
                <div class="col-auto">
                    <router-link :to="{ name: 'Inventoryadd' }" class="btn btn-primary btn-lg">Add More</router-link>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-for="(v, i) in inventory" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ v.product.name}}</td>
                        <td>{{ v.quantity}}</td>
                        <td>
                         <router-link :to="{ name: 'inventoryupdate', params: { id: v.id } }" class="btn btn-info mr-2">Edit</router-link> 
                            <button @click="deleteinventory(v.id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            inventory: []
        }
    },

    methods: {
        getinventory() {
            axios.get('http://127.0.0.1:8000/api/admin/inventory')
                .then((res) => {
                    this.inventory = res.data.data
                    // console.log(res.data.data)
                })
        },
        deleteinventory(id) {

            if (confirm('are you sure, you want to delete this file?')) {

                axios.delete("http://127.0.0.1:8000/api/admin/inventory/" + id).then(() => {
                    this.getinventory()
                });
            }


        }
    },

    mounted() {
        this.getinventory()
    }
}
</script>