<script>
import axios from 'axios'

export default {
    data() {
        return {
            cupons: [],
            users: [],
            user_id: 0,
            usage_count: 0,
            cupon_id: 0,
        }
    },

    methods: {
        // getuse() {
        //     axios.get('http://127.0.0.1:8000/api/admin/cupons')
        //         .then((result) => {
        //             this.cupons = result.data.data;
        //             //this.users = result.data.data;
        //             console.log(result.data.data);
        //             //console.log(result.data.data[0]);
        //         })
        //     axios.get('http://127.0.0.1:8000/api/admin/users')
        //         .then((result) => {
        //            // this.cupons = result.data.data;
        //             this.users = result.data.data;
        //             console.log(result.data.data);
        //            // console.log(result.data.data[0].user.name);
        //         })
        // },
        getCupons() {
            axios.get('http://127.0.0.1:8000/api/admin/couponusages')
                .then((result) => {
                    //this.cupons = result.data.data.cupons;
                    //console.log(this.cupons);
                })
        },
        storeUsesCupons() {
            const uData = {
                user_id: this.user_id,
                usage_count: this.usage_count,
                cupon_id: this.cupon_id,
            }

            console.log('ok');

            axios.post("http://127.0.0.1:8000/api/admin/couponusages", uData)
                .then((response) => {
                    console.log(response);
                });
        },
        getData() {
            axios.get('http://127.0.0.1:8000/api/admin/couponusages/create')
                .then((result) => {
                    this.cupons = result.data.data.ruhul;
                    this.users = result.data.data.users;
                    console.log(result.data.data);
                })
        }

    },

    mounted() {
        //this.getuse()
        this.getCupons()
        this.getData()
    }
}

</script>

<template>
    <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Usage Cupons</h5>
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
            <label class="form-label" for="basic-default-company">Code</label>
            <select class="form-select" v-model="cupon_id">
                <option selected>Open this select menu</option>
                <option v-for="(p, i) in cupons" :key="i" :value="p.id">{{ p.code }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">Usage Count</label>
            <input v-model="usage_count" type="text" class="form-control" id="basic-default-fullname" placeholder=" " />
        </div>
        <button @click="storeUsesCupons" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>