<script>
export default{

}
</script>
<template>
<div class="container">
    <div class="card">
        
        <div class="card-header">
            Invoice
            
            <strong>IN Number</strong>
            <span class="float-right"> <strong><a href="" class="btn btn-success btn-sm noPrint" onclick="window.print()">Print</a> DateTime:</strong>date</span>
        </div>
        <div class="card-body">
            <div class="row mb-4">
                <div class="col-sm-6">
                    <h6 class="mb-3">From:</h6>
                    <div>
                        <strong>Fazle Rabby</strong>
                    </div>
                    <div>Madalinskiego 8</div>
                    <div>71-101 Szczecin, Poland</div>
                    <div>Email: info@webz.com.pl</div>
                    <div>Phone: +48 444 666 3333</div>
                </div>
                <div class="col-sm-6">
                    <h6 class="mb-3">To:</h6>
                    <div>
                        <strong>Baki</strong>
                    </div>
                    <div>Attn: Daniel Marek</div>
                    <div>43-190 Mikolow, Poland</div>
                    <div>Email: marek@daniel.com</div>
                    <div>Phone: +48 123 456 789</div>
                </div>
            </div>
            <div class="table-responsive-sm">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="center">#</th>
                            <th>Materials</th>
                            <th>Supplier</th>
                            <th>Unit Price</th>
                            <th class="center">Qty</th>
                            <th class="right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center"> sl</td>
                            <td class="left strong">material</td>
                            <td class="left">supplier</td>
                            <td>mprice</td>
                            <td class="center">quantity</td>
                            <td class="right">price</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-5">
                </div>
                <div class="col-lg-4 col-sm-5 ml-auto">
                    <table class="table table-clear">
                        <tbody>
                            <tr>
                                <td class="left">
                                    <strong>Grand Total</strong>
                                </td>
                                <td class="right">Taka</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
@media (max-width: 1300px) {
  @media print {
    .noPrint {
    display: none;
  }
}
  }
</style>