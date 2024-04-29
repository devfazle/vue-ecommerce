<script>
import axios from 'axios'

export default {
    data() {
        return {
            product: [],
            users: [],
            user_id: 0,
            product_id: 0,
        }
    },

    methods: {
        getuse() {
            axios.get('http://127.0.0.1:8000/api/admin/products')
                .then((result) => {
                    this.product = result.data.data;
                    //this.users = result.data.data;
                    console.log(result.data.data);
                    //console.log(result.data.data[0]);
                })
            axios.get('http://127.0.0.1:8000/api/admin/users/create')
                .then((result) => {
                   // this.cupons = result.data.data;
                    this.users = result.data.data;
                    console.log(result.data.data);
                   // console.log(result.data.data[0].user.name);
                })
        },
        getWishlist() {
            axios.get('http://127.0.0.1:8000/api/admin/wishlists')
                .then((result) => {
                    //this.cupons = result.data.data.cupons;
                    console.log(result);
                })
        },
        storeWishlist() {
            const wishdata = {
                user_id: this.user_id,
                product_id: this.product_id, 
            }

            console.log('ok');

            axios.post("http://127.0.0.1:8000/api/admin/wishlists", wishdata)
                .then((response) => {
                    console.log(response)

                });
                // this.$router.push('/admin/wishlist/wishlisttable');

        }

    },

    mounted() {
        this.getuse()
        this.storeWishlist()
    }
}

</script>

<template>
    <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Name</h5>
    </div>
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label" for="basic-default-email">User</label>
            <select class="form-select" v-model="user_id">
                <option selected>Open this select menu</option>
                <option v-for="(u, i) in users" :key="i" :value="u.id">{{ u.name }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label" for="basic-default-company">Product</label>
            <select class="form-select" v-model="product_id">
                <option selected>Open this select menu</option>
                <option v-for="(p, i) in product" :key="i" :value="p.id">{{ p.name }}</option>
            </select>
        </div>
        <button @click="storeWishlist()" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>