
<template>
    <div>
        <h2>Table</h2>
    </div>
</template>

<!-- <script>
import axios from 'axios'

export default {
    data() {
        return {
            list: []
        }
    },

    methods: {
        getProductPrice() {
            axios.get('http://127.0.0.1:8000/api/admin/productprice/')
                .then((result) => {
                    this.list = result.data.data;
                    console.log(result.data.data);
                })
        },
        deletePrice(id) {
            axios.delete("http://127.0.0.1:8000/api/admin/productprice/" + id).then(() => {
                this.getProductPrice()
                alert('This fields deleted successfully!');
            });
        },
        update(id){
            this.$router.push(`/admin/product-price/product-price-edit/${id}`)

        }
    },

    mounted(){
    this.getProductPrice()
  },
};
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col">
                    <h5 class="mb-0">Product Price List</h5>
                </div>
                <div class="col-auto">
                    <router-link :to="{name: 'product-price-create'}" class="btn btn-primary btn-lg">Add More</router-link>
                </div>
            </div>
        </div>
        <div class="table-responsive text-nowrap">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Buying Price</th>
                        <th>Selling Price</th>
                        <th>Product</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="table-border-bottom-0">
                    <tr v-for="(c, i) in list" :key="i">
                        <td>{{ i + 1 }}</td>
                        <td>{{ c.buying_price }}</td>
                        <td>{{ c.selling_price }}</td>
                        <td>{{ c.product_id }}</td>
                        <td>
                          <button @click="update(c.id)" class="btn btn-info"><i class='bx bxs-edit'></i></button> 
                            &nbsp;
                          <button @click="deletePrice(c.id)" class="btn btn-danger"><i class='bx bxs-trash'></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template> -->