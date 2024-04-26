<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Product/</span> View All Product</h4>

        <!-- Basic Layout -->
        <div class="row">
            <div class="col-xl">
                <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5 class="mb-0">Filters</h5>
 <div class="col-md-12 row">
                            <div class="col-md-4">
                                <select name="" id="" class="form-select">
                                    <option value="" selected>Select Status</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select name="" id="" class="form-select">
                                    <option value="" selected>Category</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select name="" id="" class="form-select">
                                    <option value="" selected>Stock</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">   
                        <form>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-fullname">Full Name</label>
                                <input type="text" class="form-control" id="basic-default-fullname"
                                    placeholder="John Doe" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-company">Company</label>
                                <input type="text" class="form-control" id="basic-default-company"
                                    placeholder="ACME Inc." />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-email">Email</label>
                                <div class="input-group input-group-merge">
                                    <input type="text" id="basic-default-email" class="form-control"
                                        placeholder="john.doe" aria-label="john.doe"
                                        aria-describedby="basic-default-email2" />
                                    <span class="input-group-text" id="basic-default-email2">@example.com</span>
                                </div>
                                <div class="form-text">You can use letters, numbers & periods</div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Phone No</label>
                                <input type="text" id="basic-default-phone" class="form-control phone-mask"
                                    placeholder="658 799 8941" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-message">Message</label>
                                <textarea id="basic-default-message" class="form-control"
                                    placeholder="Hi, Do you have a moment to talk Joe?"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>