<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use Illuminate\Support\Facades\DB;
class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $query = Activity::with(['brand', 'taskType', 'product', 'assigner', 'employee'])->orderBy('created_at', 'desc');

            if ($request->has('user_id')) {
                $query->where('user_id', $request->input('user_id'));
            }

            $activities = $query->paginate(10);

            $result = [];
            $groups = $activities->groupBy(function ($activity) {
                return $this->formatDate($activity->created_at) . '-' . $activity->employee->fullname;
            });
            $result = $groups->map(function ($groupedActivities, $dateAndFullname) {
                [$date, $fullname] = explode('-', $dateAndFullname);
            
                return [
                    'date' => $date,
                    'fullname' => $fullname,
                    'activities' => $groupedActivities->map(function ($activity) {
                        return $activity->taskType->name . ' ' . $activity->product->name . ' ' . $activity->brand->name . ' ' . $activity->qty . ' pcs';
                    })->all(),
                ];
            })->values()->all();

            return response()->json(['data' => $result], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch activities. Please try again. Error: ' . $e->getMessage()], 500);
        }
    }

    private function formatDate($date)
    {
        $bulan = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        $tanggal = $date->format('d');
        $bulan_index = $date->format('n');
        $tahun = $date->format('Y');
        return $tanggal . ' ' . $bulan[$bulan_index] . ' ' . $tahun;
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::beginTransaction();

        try {
            $data = $request->all();
            foreach ($data['activities'] as $key => $activity) {
                $temp = Activity::create([
                    'task_type_id' => $activity['task'], 
                    'product_id' => $activity['product'], 
                    'brand_id' => $activity['brand'],
                    'user_id' => $data['employee_id'], 
                    'qty' => (int)$activity['qty'], 
                    'status' => 4,
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Activity created successfully'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['error' => 'Failed to create activity. Please try again. Error: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $activity = Activity::find($id);
        if (!$activity) {
            return response()->json(['error' => 'Activity not found'], 404);
        }
        return response()->json($activity);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $activity = Activity::find($id);
        if (!$activity) {
            return response()->json(['error' => 'Activity not found'], 404);
        }
        $activity->name = $request->input('name');
        $activity->description = $request->input('description');
        $activity->save();
        return response()->json($activity);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $activity = Activity::find($id);
        if (!$activity) {
            return response()->json(['error' => 'Activity not found'], 404);
        }
        $activity->delete();
        return response()->json(['message' => 'Activity deleted successfully']);
    }
}
