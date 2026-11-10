<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'trefle_id',
        'name',
        'price',
        'image',
        'description',
        'origin',
        'light',
        'water',
        'note',
    ];
}
