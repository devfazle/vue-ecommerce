<script>
import axios from 'axios'
export default{
data(){
    return{
        url: "http://127.0.0.1:8000/api/admin/products",
        category_id:"",
        name:"",
        price:"",
        description:"",
        sub_category_id:"",
        photo:"",
        productlist:[],
        categorylist:[],
        sub_categorylist:[],
    }
}, 
methods: {
        getProductList() {
    axios.get(this.url).then((response) => {
        const product=response.data.data[0];
        const category=response.data.data[1];
        const subcategory=response.data.data[2];
        this.productlist=product;
        this.categorylist=category;
        this.sub_categorylist=subcategory;
        console.log(product);
      });
}
    },
mounted() {
    this.getProductList();
  },
}
</script>
<template>
   <div class="container-xxl flex-grow-1 container-p-y">
        <div class="col-md-12 row">
            <div class="col-md-4 ">
                <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light"></span> Add a New Product</h4>
            </div>
            <div class="col-md-4 "></div>
            <div class="col-md-4 ">
                <button class="btn btn-outline-danger"> Discard</button>
                <button class="btn btn-dark"> Save Draft</button>
            <button class="btn btn-success"> Publish Product</button>
            </div>
    
</div>
        <!-- Basic Layout -->
        <div class="row">
            <div class="col-8">
                <div class="col-12">
                <div class="card mb-4">
                    <div class="card-body">
                       <h5>Product Information</h5>
            <div class="row"> 
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Product Name"/>
                </div>
                <!-- <div class="input-group ">
                <input type="text" class="form-control " placeholder="Product Description" />
                
              </div> -->
              <div class="form-floating">
  <textarea class="form-control" placeholder="Make Product Description Here" id="floatingTextarea2" style="height: 250px"></textarea>
  <label for="floatingTextarea2">Product Description</label>
</div>
              </div>
                </div>
                </div>
            </div>
                
                    <div class="col-12">
                <div class="card mb-4">
                    <div class="card-body">
                       <h5>Product Image</h5>
            <div class="row"> 
                <div class="input-group">
                    <input type="file" class="form-control" />
                </div>
              </div>
            
                    </div>
                </div>
            </div>
            </div>
          
            <div class="col-4">
                <div class="card mb-4">
                    <div class="card-body">
                       <h5>Pricing</h5>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Base Price"  v-model="price"/>
                </div>
                <div class="input-group ">
                <input type="text" class="form-control " placeholder="Discount Price" disabled/>
              </div>
              <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault" checked
                      />
                      <label class="form-check-label" > Charge Tax On This Product</label>
                    </div>
                    <hr>
            <div class="row">
                <div class="col-md-10">In Stoke</div>
                <div class="col-md-2"><div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked
                      />
                    </div>
                </div>
            </div>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                       <h5>Organize</h5>
                       <div class="row">
                       <select class="form-select col-md-10" v-model="category_id">
                            <option >Category</option> 
                            <option v-for="(cdata, i) in categorylist" :key="i" :value="cdata.id">{{ cdata.name }}</option> 
                        </select>
                        <button class="btn btn-outline-info col-md-2"><h3>+</h3></button>
                    </div>
                       <div class="row">
                       <select class="form-select col-md-10" v-model="sub_category_id">
                            <option >Sub Category</option> 
                            <option v-for="(scdata, i) in sub_categorylist" :key="i" :value="scdata.id">Sub Category</option> 
                        </select>
                        <button class="btn btn-outline-info col-md-2"><h3>+</h3></button>
                    </div>
                    <div class="row">
                        <select class="form-select" >
                            <option selected>Vendor</option>
                        </select>
                    </div>
                    <div class="row">
                        <select class="form-select" >
                            <option selected>Collection</option>
                            <option >New Model</option>
                            <option >Golen Model</option>
                        </select>
                    </div>
                    <div class="row">
                        <select class="form-select" >
                            <option selected>Status</option>
                            <option >Publish</option>
                            <option >Unpublish</option>
                        </select>
                    </div>
                    <div class="row">
                        <select class="form-select " >
                            <option selected>Tag</option>
                        </select>
                    </div>
 
                    </div>
                </div>

            </div>
            
        </div>
    </div> 
</template>
