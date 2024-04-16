<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryType extends Model
{

    CONST TYPE_PRUBEZNY = 1;
    CONST TYPE_KONCOVY = 2;
    CONST TYPE_ROHOVY = 3;

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
    //protected $appends = ['thumbnail_url', 'thumbnail_file'];

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
        $categoryType = CategoryType::find($id);
        return $categoryType ? $categoryType->name : "-";
     }

}
