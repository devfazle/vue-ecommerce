<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Sub_category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductsController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->with('category','sub_category','wishlist','order_item','purchase','cart','photo')->get();
        $category_id=Category::with('sub_category')->orderBy('id', 'desc')->get();
        $sub_category_id=Sub_category::orderBy('id', 'desc')->get();
        $tdata=( [$products,$category_id,$sub_category_id]);
        return $this->sendResponse($tdata, 'Product list fetched successfully!');

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
            'category_id' => 'required',
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'sub_category_id' => 'required',
            'path' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        $input['category_id'] = $request->category_id;
        $input['name'] = $request->name;
        $input['price'] = $request->price;
        $input['description'] = $request->description;
        $input['sub_category_id'] = $request->sub_category_id;

        $path['path']=$request->path;
        $file = $request->path;
        $filename = time().'.'.$file->getClientOriginalExtension();
        $request->path->move(public_path('photos/products'), $filename);
        $products = Product::create($input);
        $products->photo()->create(['path' => $filename]);
        return $this->sendResponse($products, 'Product created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $products = Product::with('category','sub_category','wishlist','order_item','purchase','cart')->find($id);
        return $this->sendResponse($products, 'Product list fetched successfully!');

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $products = Product::find($id);
        return $this->sendResponse($products, 'Product fetched successfully!');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'category_id' => 'required',
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            'sub_category_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(), 422);
        }
        $input = $request->all();
        $products = Product::find($id)->update($input);
        return $this->sendResponse($products, 'Product updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $products = Product::find($id)->delete();
        return $this->sendResponse($products, 'Product deleted successfully!');
    }
}

