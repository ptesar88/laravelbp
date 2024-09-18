<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demand;


class DemandController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'localisation' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $demand = Demand::create($request->all());

        return response()->json($demand, 201);
    }
    
}
