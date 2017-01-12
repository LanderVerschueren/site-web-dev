<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
    	return view('index');
    }

    public function about() {
    	return view('pages.about_us');
    }

    public function product(Request $request) {
    	return view('pages.productview');
    }

    public function productDetail(Request $request) {
    	return view('pages.productview-detail');
    }
}
