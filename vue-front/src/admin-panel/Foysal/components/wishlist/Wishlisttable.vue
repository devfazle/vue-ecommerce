<template>
     <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col">
                    <h5 class="mb-0">Cart List</h5>
                </div>
                <div class="col-auto">
                    <router-link :to="{name: 'wishlistadd'}" class="btn btn-primary btn-lg">Add More</router-link>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Product</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-for="(w, i) in wishlists" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ w.product.name }}</td>
                        <td>{{ w.quantity }}</td>
                        <td>{{ w.user.name }}</td>
                        <td>
                            <router-link :to="{ name: 'wishlistupdate', params: { id: w.id } }" class="btn btn-info mr-2">Edit</router-link>
                            <button @click="deleteWishlist(w.id)" class="btn btn-danger">Delete</button>
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
            wishlists: []
        }
    },

    methods: {
        getwishlist() {
            axios.get('http://127.0.0.1:8000/api/admin/wishlists')
                .then((result) => {
                    this.carts = result.data.data;
                    console.log(result);
                })
        },
        deleteWishlist(id) {
            axios.delete("http://127.0.0.1:8000/api/admin/wishlists/" + id).then(() => {
                this.getwishlist()
            });
        }
    },

    mounted() {
       
    }
}
</script>