<template>
    <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Update Sub_category</h5>
    </div>
    <div class="card-body">
        <div class="mb-3">
            <label class="form-label" for="basic-default-email">Category</label>
            <select class="form-select" v-model="category_id">
                <option selected>Open this select menu</option>
                <option v-for="(c, i) in category" :key="i" :value="c.id">{{ c.name }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label class="form-label" for="basic-default-fullname">name</label>
            <input v-model="name" type="text" class="form-control" id="basic-default-fullname"
                placeholder="Sub category name" />
        </div>
        <button @click="updateSub_category()" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
     data() {
        return {
            sub_categorys:[],
            category_id:0,
            name:'' , 
            id:this.$route.params.id,
        }
    },
    methods: {
        getsubcategorys(){
            axios.get("http://127.0.0.1:8000/api/admin/subcategorys/" + this.id + '/edit').then((res) => {
                const subcategorys = res.data.data;
                this.name =subcategorys.name                   
                this.category_id =subcategorys.category_id                   
                
            });
        },
        updateSub_category(){
            const subcategorysData = {
                 name: this.name,
            }
            axios.put("http://127.0.0.1:8000/api/admin/subcategorys/"+this.id, subcategorysData)
                .then((response) => {
                    console.log(response);
                });
        }
    },
    mounted(){
        this.getsubcategorys();
        this.updateSub_category();
    }
}
</script>