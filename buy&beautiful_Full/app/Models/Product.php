<?php

// app/Models/Product.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Define the fillable fields
    protected $fillable = ['name', 'price', 'image_url'];
}


/*export const products = [
  {
    id: 1,
    name: "Product 1",
    price: "BDT 500",
    image: "https://path/to/your/image1.jpeg"
  },
  {
    id: 2,
    name: "Product 2",
    price: "BDT 700",
    image: "https://path/to/your/image2.jpeg"
  },
  {
    id: 3,
    name: "Product 3",
    price: "BDT 800",
    image: "https://path/to/your/image3.jpeg"
  },
  {
    id: 4,
    name: "Product 4",
    price: "BDT 1200",
    image: "https://path/to/your/image4.jpeg"
  },
  {
    id: 5,
    name: "Product 5",
    price: "BDT 1500",
    image: "https://path/to/your/image5.jpeg"
  },
  {
    id: 6,
    name: "Product 6",
    price: "BDT 2000",
    image: "https://path/to/your/image6.jpeg"
  },
  {
    id: 7,
    name: "Product 7",
    price: "BDT 2500",
    image: "https://path/to/your/image7.jpeg"
  }
]; 
*/