<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Benefit;
use Illuminate\Support\Facades\DB;

class BenefitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $benefits = Benefit::all();
        return response()->json($benefits);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $benefit = Benefit::create([
            'name'=>$data['name'],
            'amount'=>$data['amount'],
            'employee_id'=>$data['employee_id'],
        ]);
        if (!$benefit) {
            return response()->json(['error' => 'Benefit not created'], 500);
        }
        return response()->json(['data' => $benefit, 'message' => 'Benefit created successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $benefit = Benefit::find($id);
        if (!$benefit) {
            return response()->json(['error' => 'Benefit not found'], 404);
        }
        return response()->json($benefit);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $benefit = Benefit::find($id);
        if (!$benefit) {
            return response()->json(['error' => 'Benefit not found'], 404);
        }

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'amount' => 'required',
        ]);

        $benefit->name = $request->input('name');
        $benefit->description = $request->input('description');
        $benefit->amount = $request->input('amount');
        $benefit->save();

        return response()->json($benefit);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $benefit = Benefit::find($id);
        if (!$benefit) {
            return response()->json(['error' => 'Benefit not found'], 404);
        }
        $benefit->delete();
        return response()->json(['message' => 'Benefit deleted successfully']);
    }
}
