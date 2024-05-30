<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DataMaster;

class DataMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $dataMasters = DataMaster::query();

            if ($request->has('all')) {
                $data = $dataMasters->get();
                $count = $data->count();
            } else {
                if ($request->has('name')) {
                    $dataMasters->where('name', 'like', '%' . $request->input('name') . '%');
                }

                if ($request->has('tipeData')) {
                    $dataMasters->where('tipe_master_data', $request->input('tipeData'));
                }

                $perPage = 10; // adjust this value to change the number of items per page
                $page = $request->input('page', 1);

                $dataMasters = $dataMasters->paginate($perPage);

                $count = $dataMasters->total();
                $data = $dataMasters->items();
            }

            if (!$data) {
                return response()->json(['error' => 'No data masters found'], 404);
            }

            return response()->json([
                'data' => $data,
                'count' => $count,
                'perPage' => $perPage ?? null,
                'currentPage' => $page ?? null,
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'tipeData' => 'required|string',
            ]);

            if (!$validatedData) {
                return response()->json(['error' => 'Invalid data'], 422);
            }
            $tipe = strtolower($validatedData['tipeData']);
            $dataMaster = DataMaster::create([
                'name'=>$validatedData['name'],
                'tipe_master_data'=>$tipe
            ]);

            if (!$dataMaster) {
                return response()->json(['error' => 'Failed to create DataMaster'], 500);
            }

            return response()->json(['data' => $dataMaster], 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $dataMaster = DataMaster::find($id);
        if (!$dataMaster) {
            return response()->json(['error' => 'Data Master not found'], 404);
        }
        return response()->json(['data' => $dataMaster]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $dataMaster = DataMaster::find($id);

            if (!$dataMaster) {
                return response()->json(['error' => 'Data Master not found'], 404);
            }

            $validatedData = $request->validate([
                'name' => 'required|string',
                'tipeData' => 'required|string',
            ]);

            if (!$validatedData) {
                return response()->json(['error' => 'Invalid data'], 422);
            }

            $dataMaster->name = $validatedData['name'];
            $dataMaster->tipe_master_data = $validatedData['tipeData'];
            $dataMaster->save();

            return response()->json(['data' => $dataMaster]);
        } catch (Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataMaster = DataMaster::find($id);
        if (!$dataMaster) {
            return response()->json(['error' => 'Data Master not found'], 404);
        }
        $dataMaster->delete();
        return response()->json(['data' => ['message' => 'Data Master deleted successfully']]);
    }
}
