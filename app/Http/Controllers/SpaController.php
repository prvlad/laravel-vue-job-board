<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class SpaController extends Controller
{
    /**
     * @return View
     */
    public function __invoke(): view
    {
        return view('spa');
    }
}
