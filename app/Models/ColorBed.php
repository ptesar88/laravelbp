<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ColorBed extends Model
{
    const CREATED_AT = null;
    const UPDATED_AT = null;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
   

    /**
     * Get the URL of the thumbnail.
     *
     * @return string|null
     */
  

    /**
     * Get the file of the thumbnail.
     *
     * @return array|null
     */


    public static function getNameById($id) {
        $colorBed = ColorBed::find($id);
        return $colorBed ? $colorBed->name : "-";
     }

}

