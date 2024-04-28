<script>
import axios from 'axios'

export default {
    data() {
        return {
            carts: []
        }
    },

    methods: {
        getCarts() {
            axios.get('http://127.0.0.1:8000/api/admin/carts')
                .then((result) => {
                    this.carts = result.data.data;
                    console.log(result);
                })
        },
        deleteCart(id) {
            axios.delete("http://127.0.0.1:8000/api/admin/carts/" + id).then(() => {
                this.getCarts()
            });
        }
    },

    mounted() {
        this.getCarts()
    }
}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col">
                    <h5 class="mb-0">Cart List</h5>
                </div>
                <div class="col-auto">
                    <router-link :to="{name: 'cartAdd'}" class="btn btn-primary btn-lg">Add More</router-link>
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
                        <th>User</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-for="(c, i) in carts" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ c.product.name }}</td>
                        <td>{{ c.quantity }}</td>
                        <td>{{ c.user.name }}</td>
                        <td>
                            <router-link :to="{ name: 'cartUpdate', params: { id: c.id } }" class="btn btn-info mr-2">Edit</router-link>
                            <button @click="deleteCart(c.id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>