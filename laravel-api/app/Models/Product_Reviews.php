<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Reviews extends Model
{
    use HasFactory;
<<<<<<< HEAD
    protected $table = 'product_reviews';
=======
    protected $table = "product_reviews";
>>>>>>> d8d2b2a59c17e9e6f64e8128a7b97c18d215bb36
    protected $guarded = ['id'];
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function product() {
        return $this->belongsTo(Product::class);
    }

}
