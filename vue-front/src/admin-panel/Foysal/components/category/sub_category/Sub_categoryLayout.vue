<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Category/</span> Sub_Category</h4>

        <!-- Basic Layout -->
        <div class="row">
            <div class="col-xl">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Sub Category List 
                            <RouterLink to="/admin/sub_category/sub_add" class="btn btn-primary">
                                Add Sub Category
                            </RouterLink>
                        </h5>
                    
                    </div>
                    
              
                    <router-view/>
                          <!-- body goes here -->
                          <div class="card-body">
                       <table class="table table-border">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Category_id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                         <tr v-for="(sub_categorys, index) in this.sub_categorys" :key="index">
                                <td>{{ sub_categorys.id }}</td>
                                <td>{{ sub_categorys.name}}</td>
                                <td>{{ sub_categorys.category_id}}</td>
                                <td>
                              
                                    <RouterLink to="/" class="btn btn-success">
                                Edit
                            </RouterLink>
                            <button type="button" @click="deleteSub_categorys(sub_categorys.id)" class="btn btn-danger"> Delete
                                 </button>
                                </td>
                            </tr>
                        </tbody>

                       </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'subcategory',
    data(){
        return{
            sub_categorys:[]
        }
    },
    methods: {
        getSubcategory(){

            axios.get("http://127.0.0.1:8000/api/admin/subcategorys").then((res) => {

                this.sub_categorys = res.data.data,
                console.log( this.sub_categorys)
            })
        },
        deleteSub_categorys(id){

            if(confirm('are you sure, you want to delete this file?')){

                    axios.delete("http://127.0.0.1:8000/api/admin/subcategorys/" + id).then(() => {
                    this.getSubcategory()
});
}
        }
    },
    mounted(){
        this.getSubcategory();
    }
}

</script>