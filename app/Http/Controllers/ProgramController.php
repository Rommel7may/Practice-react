<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Program;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('program-crud',[
            'programs'=> Program::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(['name' => 'required']);
        Program::create($request->only('name'));
        return redirect()->route('programs.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
      public function update(Request $request, Program $program)
    {
        $request->validate(['name' => 'required']);
        $program->update($request->only('name'));
        return redirect()->route('programs.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Program $program)
    {
        $program->delete();
        return redirect()->route('programs.index');
    }
}
