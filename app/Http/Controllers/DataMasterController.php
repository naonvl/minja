<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataMasterController extends Controller
{
    public function brandIndex()
    {
        return view('content.data-master.index');
    }
}
