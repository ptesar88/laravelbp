<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
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


}
