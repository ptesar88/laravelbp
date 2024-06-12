<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Demand extends Model
{

    const CREATED_AT = null;
    const UPDATED_AT = null;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'phone',
        'company',
        'body', 
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array<int, string>
     */
    //protected $appends = ['thumbnail_url'];

    /**
     * Get the URL of the thumbnail.
     *
     * @return string|null
     */
    /*
    public function getThumbnailUrlAttribute()
    {
        if ($this->thumbnail) {
            return asset('attachments/' . $this->thumbnail);
        }
        
        return null;
    }
*/
}
