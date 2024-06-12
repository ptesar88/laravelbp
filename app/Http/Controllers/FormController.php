<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        // Initialize $showDivField and $option
        $showDivField = false;
        $option = '';

        return view('konfigurator', compact('showDivField', 'option'));
    }

    public function processForm(Request $request)
    {
        // Check if the 'option' radio button is set to 'yes' or 'no'
        // If yes, set $showDivField to true and $option to the selected value
        $option = $request->input('option');
        $showDivField = $option === 'ano' || $option === 'ne';

        return view('konfigurator', compact('showDivField', 'option'));
    }
}
