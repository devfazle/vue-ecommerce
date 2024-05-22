<?php

namespace App\Http\Controllers;

use App\Models\VendorReturn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VendorReturnController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vendorReturn = VendorReturn::orderBy('id', 'desc')->with('product')->get();
        return $this->sendResponse($vendorReturn, 'Vendor Return list fetched successfully!');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'purchase_invoice' => 'required',
            "product_id" => 'required',
            "quantity" => 'required',
            "reason" => 'required',
            "refund" => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        $input = $request->all();
        $vendorReturn = VendorReturn::create($input);
        return $this->sendResponse($vendorReturn, 'Vendor Return created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(VendorReturn $vendorReturn)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $vendorReturn = VendorReturn::with('product')->find($id);
        return $this->sendResponse($vendorReturn, 'Vendor Return fetched successfully!');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'purchase_invoice' => 'required',
            "product_id" => 'required',
            "quantity" => 'required',
            "reason" => 'required',
            "refund" => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        $input = $request->all();
        $vendorReturn = VendorReturn::find($id)->update($input);
        return $this->sendResponse($vendorReturn, 'Vendor Return created successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $vendorReturn = VendorReturn::find($id)->delete();
        return $this->sendResponse($vendorReturn, 'Vendor Return deleted successfully!');
    }
}
