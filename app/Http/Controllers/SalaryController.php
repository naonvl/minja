<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Salary;

class SalaryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $salaries = Salary::all();
        return response()->json($salaries);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'employee_id' => 'required',
            'product_id' => 'required',
            'task_type_id' => 'required',
            'amount' => 'required',
        ]);

        $salary = Salary::updateOrCreate(
            [
                'employee_id' => $request->input('employee_id'),
                'product_id' => $request->input('product_id'),
                'task_type_id' => $request->input('task_type_id')
            ],
            [
                'amount' => $request->input('amount')
            ]
        );

        if (!$salary) {
            return response()->json(['error' => 'Salary not created'], 500);
        }
        $temp = Salary::where('id',$salary->id)->with(['product','taskType'])->first();
        $temp->name = $temp->taskType->name . ' ' . $temp->product->name;
        $temp->amount = 'Rp. ' . number_format($temp->amount, 0, ',', '.');
        return response()->json(['data' => $temp, 'message' => 'Salary created successfully'], 201);
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $salary = Salary::find($id);
        if (!$salary) {
            return response()->json(['error' => 'Salary not found'], 404);
        }
        return response()->json($salary);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $salary = Salary::find($id);
        if (!$salary) {
            return response()->json(['error' => 'Salary not found'], 404);
        }

        $request->validate([
            'employee_id' => 'required',
            'salary' => 'required',
            'effective_date' => 'required',
        ]);

        $salary->employee_id = $request->input('employee_id');
        $salary->salary = $request->input('salary');
        $salary->effective_date = $request->input('effective_date');
        $salary->save();

        return response()->json($salary);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $salary = Salary::find($id);
        if (!$salary) {
            return response()->json(['error' => 'Salary not found'], 404);
        }
        $salary->delete();
        return response()->json(['message' => 'Salary deleted successfully']);
    }
}
