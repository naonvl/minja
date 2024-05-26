<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
public function index(Request $request)
{
    $draw = $request->input('draw');
    $start = $request->input('start');
    $length = $request->input('length');

    $employees = Employee::where('status', 1)
        ->with('department')
        ->offset($start)
        ->limit($length)
        ->get();

    $recordsTotal = Employee::where('status', 1)->count();

    $data = [];
    foreach ($employees as $employee) {
        $data[] = [
            'id' => $employee->id,
            'fullname' => $employee->fullname,
            'status' => $employee->status,
            'department' => $employee->department->name,
        ];
    }

    return response()->json([
        'draw' => $draw,
        'recordsTotal' => $recordsTotal,
        'recordsFiltered' => $recordsTotal,
        'data' => $data,
    ], 200);
}
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'fullname' => 'required|string',
        'email' => 'required|email|unique:users',
        'username' => 'required|string|unique:users', 
        'department' => 'required|integer',  
    ]);

    try {
        DB::beginTransaction();
        $data = $request->all();
        $user = new User();
        $user->user_type = 1;
        $user->username = $data['username'];
        $user->email = $data['email'];
        $user->password = bcrypt($data['password']);
        $user->role_id = 1;
        $user->save();

        $employee = new Employee();
        $employee->user_id = $user->id;
        $employee->fullname = $data['fullname'];
        $employee->status = 1;
        $employee->department_id = $data['department'];
        $employee->save();

        DB::commit();

        return response()->json(['data'=>$employee, 'message'=>'Employee created successfully'], 201);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json(['error'=>'Failed to create employee', 'message'=>$e->getMessage()], 422);
    }
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }

        $data = new EmployeeData();
        $data->data->employee = $employee;
        return response()->json(['data'=>$data], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
{
    $employee = Employee::find($id);
    if (!$employee) {
        return response()->json(['error' => 'Employee not found'], 404);
    }

    $request->validate([
        'name' => 'required|string',
        'email' => 'required|email|unique:employees,email,' . $id,
        'department' => 'required|string',
    ]);

    try {
        DB::beginTransaction();
        $employee->name = $request->input('name');
        $employee->email = $request->input('email');
        $employee->department = $request->input('department');
        $employee->save();

        DB::commit();

        $data = new EmployeeData();
        $data->data->employee = $employee;
        return response()->json(['data'=>$data, 'message'=>'Employee updated successfully'], 200);
    } catch (\Exception $e) {
        DB::rollBack();
        return response()->json(['error'=>'Failed to update employee', 'message'=>$e->getMessage()], 422);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['error' => 'Employee not found'], 404);
        }
        try {
            $employee->delete();

            $data = new EmployeeData();
            $data->data->message = 'Employee deleted successfully';
            return response()->json(['data'=>$data], 200);
        } catch (\Exception $e) {
            return response()->json(['error'=>'Failed to delete employee', 'message'=>$e->getMessage()], 422);
        }
    }
}
