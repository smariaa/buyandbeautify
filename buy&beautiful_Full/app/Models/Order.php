<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id', 'total_price', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    // Logic to calculate the total price of the order
    public function calculateTotalPrice()
    {
        return $this->orderItems()->with('product')->get()->sum(function ($item) {
            return $item->quantity * $item->product->price;
        });
    }
}
