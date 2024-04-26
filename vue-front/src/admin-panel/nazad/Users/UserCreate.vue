<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Forms/</span> Vertical Layouts</h4>

        <!-- Basic Layout -->
        <div class="row">
            <div class="col-xl">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Users Form</h5>
                        <small class="text-muted float-end">Default label</small>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="save">
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-fullname">Name</label>
                                <input type="text" v-model="name" class="form-control" id="basic-default-fullname"
                                    placeholder="John Doe" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-email">Email</label>
                                <div class="input-group input-group-merge">
                                    <input type="text" v-model="email" id="basic-default-email" class="form-control"
                                        placeholder="john.doe" aria-label="john.doe"
                                        aria-describedby="basic-default-email2" />
                                    <span class="input-group-text" id="basic-default-email2">@example.com</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Phone</label>
                                <input type="text" v-model="phone_number" class="form-control"
                                    placeholder="0158" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Role</label>
                                <select class="form-control" v-model="role_id" >
                                    <option value="">Select one</option>
                                    <option v-for="(data, k) in list" :key="k" :value="data.id">{{ data.name }}
                                </option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Address</label>
                                <input type="text" v-model="address" id="basic-default-phone" class="form-control phone-mask"
                                    placeholder="Dhaka" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-message">Bank Info</label>
                                <textarea id="basic-default-message" v-model="bank_info" class="form-control"
                                    placeholder="Inter your bank account and name"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            test: "<h1>Income table</h1>",
            url: 'http://localhost:8000/api/admin/roles',
            name: "",
            email: "",
            phone_number: "",
            address: "",
            bank_info: "",
            role_id: '',

        }
    },
    methods: {
        getUsersList() {
            axios.get(this.url)
                .then((result) => {
                    this.list = result.data.data
                   console.log(result.data.data)

                });
        },

        //add income----------------------
        save() {
            // axios.post(this.urlI, {
                //      name:this.name,
                //      email:this.email,
                //      phone_number:this.phone_number,
                //      address:this.address,
            //     role_id: this.role_id,
            //     date: this.date,
            //     employee_id: this.employee_id,
            //     amount: this.amount,
            //     details: this.details,
            
               
            //     


            // })
            //     .then((response) => {
            //         // this.$router.push('/income');
            //     }, (error) => {
            //         console.log(error);
            //     });
            
            console.log(this.role_id)

        },

    },
    mounted() {
        this.getUsersList()
    },
}
</script>