<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    // Logic to calculate total price of items in the cart
    public function totalPrice()
    {
        return $this->cartItems()->with('product')->get()->sum(function ($item) {
            return $item->quantity * $item->product->price;
        });
    }
}
