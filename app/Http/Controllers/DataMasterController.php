<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      return view('content.data-master.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Code to show form to create a new activity
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Code to store a new activity
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // Code to display a specific activity
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // Code to show form to edit an activity
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Code to update a specific activity
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Code to delete a specific activity
    }
}
